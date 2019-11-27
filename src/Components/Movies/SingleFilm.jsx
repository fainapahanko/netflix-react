import React from 'react'
import {Card, CardImg} from 'reactstrap'
import '../../index.css'
import {Link} from 'react-router-dom'

const SingleFilm = props => {
    return(
        <Card className="col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to={"/details" + props.film.imdbID}>
            <CardImg top height="300px" className="card-with-poster"  src={props.film.Poster} alt="Card image cap" />
          </Link>
        </Card>
    )
}

export default SingleFilm