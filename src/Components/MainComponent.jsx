import React from 'react';

//components
import ListFilms from './ListFilms';
import DetailsPage from './DetailsPage';
import SearchedFilms from './SearchedFilms'

//style+reactstrap
import {Container, Row, InputGroup, 
        InputGroupAddon, InputGroupText, Input,
 } from 'reactstrap'
import {} from 'react-dom'
import '../index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var arr = ["Star Wars","Harry Potter","Air Bud"]

class MainComponent extends React.Component {

    state = {
        movies: [],
        selectedMovie: undefined,
        searchResult: '',
        films: [],
        comments: undefined
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
        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)

        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&i=" + filmImdbID)
        let commentResponse = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + filmImdbID,{
            method: "GET",
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })

        let newComments = await commentResponse.json()
        let filmInfo = await response.json()

        await this.setState({
            selectedMovie: filmInfo,
            comments: newComments
        })
        console.log(filmInfo)
        console.log(newComments)
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
                </Row>
                {this.state.selectedMovie && <DetailsPage film={this.state.selectedMovie} comment={this.state.comments}/>}
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