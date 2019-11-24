import React from 'react';

//components
import ListFilms from './ListFilms';
import DetailsPage from './DetailsPage';
import SearchedFilms from './SearchedFilms'

//style+reactstrap
import {Container, Row, InputGroup, Col,
        InputGroupAddon, InputGroupText, Input,
 } from 'reactstrap'
import '../index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var arr = ["Star Wars","Harry Potter","Air Bud"]

class MainComponent extends React.Component {

    state = {
        movies: [],
        selectedMovie: undefined,
        searchResult: '',
        films: []
    }

    componentDidMount = async () =>{

        let filmsInfo
        arr.forEach(async(element) => {
            let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + element)
            filmsInfo = await response.json();
            await this.setState({
                movies: [...this.state.movies, {
                    title: element,
                    info: filmsInfo.Search
                }]
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

    onSelectedFilm = async(filmImdbID) => {
        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&i=" + filmImdbID)
        let filmInfo = await response.json()
        await this.setState({
            selectedMovie: filmInfo
        })
        console.log(filmInfo)
    }

    render(){
        return(
            <Container>
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
                        .map((movie, index) => <SearchedFilms film={movie} key={index} />
                    )}
    }
                </Row>
                {this.state.selectedMovie && <DetailsPage film={this.state.selectedMovie} />}
                <Row>
                    {this.state.movies.map((film, index) => 
                        <ListFilms onSelected={this.onSelectedFilm} movie={film} key={index}/>
                    )}
                </Row>
            </Container>
        )
    }
}

export default MainComponent 