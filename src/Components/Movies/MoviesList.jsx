import React from 'react'
import ListFilms from '../Movies/ListFilms';
import SearchedFilms from '../Movies/SearchedFilms';
import { TraceSpinner } from "react-spinners-kit";
import{InputGroup, InputGroupAddon, InputGroupText, Input, Row} from 'reactstrap'

var arr = ["Star Wars","Harry Potter","Air Bud"]

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            selectedMovie: undefined,
            searchResult: '',
            films: [],
            loading: true,
        };
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        })
        let filmsInfo
        arr.forEach(async(element) => {
            let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + element)
            filmsInfo = await response.json();
            console.log(filmsInfo)
            await this.setState({
                movies: [...this.state.movies, {
                    title: element,
                    info: filmsInfo.Search
                }],
                loading: false,
            })
        })
    }

    searchMovie = async(ev) => {
        let input = ev.target.value 
        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + input)
        let movies = await response.json()
        this.setState({
            searchResult: input,
            films: movies.Search
        })
    }

    render(){
        let movies = this.state.movies

        if(this.state.loading){  
            return <div className="col-md-12 justify-content-center align-items-center">
                <TraceSpinner size={30} color="#73C991"/>
            </div>
        }
        return(
            <>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        onChange={this.searchMovie}
                        placeholder="harrypotter" />
                    </InputGroup>
                <Row>
                    {this.state.films && this.state.films
                        .map((movie, index) => <SearchedFilms onSelected={this.onSelectedFilm} film={movie} key={index} />
                    )}
                </Row>
                <Row>
                    {!movies ? <TraceSpinner size={30} color="#73C991"/> : movies.map((film, index) => <ListFilms onSelected={this.onSelectedFilm} movie={film} key={index}/>
                        )}
                </Row>
            </>
        )
    }
}

export default MoviesList