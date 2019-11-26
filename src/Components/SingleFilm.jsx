import React from 'react'
import {
    Card, CardImg
  } from 'reactstrap'
import '../index.css'

const SingleFilm = props => {
    return(
        <Card className="col-lg-3 col-md-4 col-sm-6 col-12">
          <CardImg top height="300px" onClick={()=>props.selectFilm(props.film.imdbID)} className="card-with-poster"  src={props.film.Poster} alt="Card image cap" />
        </Card>
    )
}



export default SingleFilm