import React from 'react'
import ListFilms from '../Movies/ListFilms';
import SearchedFilms from '../Movies/SearchedFilms';
import { MagicSpinner  } from "react-spinners-kit";
import{InputGroup, InputGroupAddon, InputGroupText, Input, Row} from 'reactstrap'
import '../../index.css'

var arr = ["Star Wars","Harry Potter","Air Bud"]

class MoviesList extends React.Component {
    state = {
        movies: [],
        selectedMovie: undefined,
        searchResult: '',
        films: [],
        loading: true,
    }

    render(){
        return(
            <>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        onChange={this.searchMovie}
                        placeholder="harry potter" />
                </InputGroup>
                {this.state.loading && <div style = {{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <MagicSpinner  size={100} color="#73C991"/>
                    </div>}
                <Row>
                    {this.state.films && this.state.films
                        .map((movie, index) => <SearchedFilms onSelected={this.onSelectedFilm} film={movie} key={index}/>)}
                </Row>
                    {!this.state.loading && this.state.movies.map((film, index) => <ListFilms movie={film} key={index}/>)
                }
            </>
        )
    }
    componentDidMount = async () => {
        await this.fetchingMovies()
    }

    fetchingMovies = async() => {
        this.setState({
            loading: true
        })
        let filmsInfo
        arr.forEach(async(element) => {
            let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + element)
            filmsInfo = await response.json();
            this.setState({
                movies: [...this.state.movies, {
                    title: element,
                    info: filmsInfo.Search,
                }],
            })
        })
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        },3000)
    }



    searchMovie = async(ev) => {
        this.setState({
            loading:true
        })
        let input = ev.target.value 
        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + input)
        let movies = await response.json()
        setTimeout(()=> {
            this.setState({
                searchResult: input,
                films: movies.Search,
                loading:false
            })
        },1000)
    }
}

export default MoviesList