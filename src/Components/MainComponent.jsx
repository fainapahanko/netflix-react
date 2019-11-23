import React from 'react';

//components
import ListFilms from './ListFilms';
import DetailsPage from './DetailsPage';

//style+reactstrap
import {Container, Row } from 'reactstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var arr = ["Star Wars","Harry Potter","Air Bud"]

class MainComponent extends React.Component {

    state = {
        movies: [],
        selectedMovie: undefined
    }

    componentDidMount = async () =>{

        arr.forEach(async(element) => {
            let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&s=" + element)
            let filmsInfo = await response.json();
            this.setState({
                movies: [...this.state.movies, {
                    title: element,
                    info: filmsInfo.Search
                }]
            })
        })
    }

    onSelectedFilm = (film) => {
        console.log("clicked",film)
        this.setState({
            selectedMovie: film
        })
    }

    render(){
        return(
            <Container>
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