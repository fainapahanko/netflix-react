import React from 'react'
import {Card, CardImg, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../index.css'

class SearchedFilms extends React.Component{
    state = {}
    render () {
        return(
            <Card className="col-lg-2 col-md-3 col-sm-4 col-6 searched-card">
                <Link to={"/details" + this.props.film.imdbID}>
                <CardImg top height="300px" className="card-with-poster-searched"  src={this.props.film.Poster} alt="Card image cap" />
                <CardBody>
                    <h3 className="text-searched-movie">{this.props.film.Title}</h3>
                </CardBody>
                </Link>
            </Card>
        )
    }
}

export default SearchedFilms