import React from 'react'
import {Card, CardImg, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../index.css'

class SearchedFilms extends React.Component{
    state = {}
    render () {
        return(
            <Card className="col-lg-3 col-md-4 col-sm-6 col-12 searched-card">
                <Link to={"/details" + this.props.film.imdbID}>
                <CardImg top height="300px" className="card-with-poster"  src={this.props.film.Poster} alt="Card image cap" />
                <CardBody>
                    <h3>{this.props.film.Title}</h3>
                </CardBody>
                </Link>
            </Card>
        )
    }
}

export default SearchedFilms