import React from 'react'
import {
    Row, Col
  } from 'reactstrap';
import SingleFilm from './SingleFilm'
// var arr = [{state: "Star",name: "Star Wars",id: "star%20wars"}, {state: "Harry",name: "Harry Potter",id: "harry%20potter"}]


class ListFilms extends React.Component{
    state = {
    }
    render(){
        return(
            <Col md="12">
                <h2>{this.props.movie.title}</h2>
                <Row>
                    {this.props.movie.info
                        .map((filmEntry, index) =>
                            <SingleFilm top key={index} film={filmEntry} alt="Card image cap" />
                    )}
                </Row>
            </Col>
        )
    }
}



export default ListFilms