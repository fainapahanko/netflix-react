import React from 'react'
import {
    Card, CardImg, CardBody
  } from 'reactstrap'
import '../index.css'

const SearchedFilms = props =>{
    return(
        <Card className="col-lg-3 col-md-4 col-sm-6 col-12 searched-card">
            <CardImg top height="300px" className="card-with-poster"  src={props.film.Poster} alt="Card image cap" />
            <CardBody>
                <h3>{props.film.Title}</h3>
            </CardBody>            
        </Card>
    )
}

export default SearchedFilms