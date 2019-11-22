import React from 'react';
import {Container, Row } from 'reactstrap'
import ListFilms from './ListFilms';
var arr = [{state: "Star",name: "Star Wars",id: "star%20wars"}, {state: "Harry",name: "Harry Potter", id: "harry%20potter"}]

class MainComponent extends React.Component {

    state = {
        films: []
    }

    componentDidMount = async () =>{
        arr.forEach(async(element) => {
            let url = "http://www.omdbapi.com/?apikey=ad6a24df&s=" + element.id
            let response = await fetch(url)
            let filmsInfo = await response.json();
            let filmsState = {
                title: element.name,
                info: filmsInfo.Search
            }
            console.log(filmsState.title)
            this.state.films.push(filmsState)
        })
        console.log(this.state.films)
    }

    render(){
        return(
            <Container>
                <h1>LOLacl</h1>
                <Row>
                    {this.state.films.map((film, index) => 
                        <ListFilms movie={film} key={index}/>
                    )}
                </Row>
            </Container>
        )
    }
}

export default MainComponent 