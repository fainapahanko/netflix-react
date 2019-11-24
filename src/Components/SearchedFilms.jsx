import React from 'react'
import {
    Card, CardImg, CardBody, Row
  } from 'reactstrap'
import '../index.css'

class SearchedFilms extends React.Component{
    state = {}
    render () {
        return(
            <Card className="col-lg-3 col-md-4 col-sm-6 col-12 searched-card">
                <CardImg top height="300px" className="card-with-poster"  src={this.props.film.Poster} alt="Card image cap" />
                <CardBody>
                    <h3>{this.props.film.Title}</h3>
                </CardBody>            
            </Card>
        )
    }
}


export default SearchedFilms