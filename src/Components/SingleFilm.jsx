import React from 'react'
import {
    Card, CardImg
  } from 'reactstrap';

class SingleFilm extends React.Component{
    state = {}
    render () {
        return(
            <Card className="col-lg-2 col-md-4 col-sm-6 col-12">
              <CardImg top src={this.props.film.Poster} alt="Card image cap" />
            </Card>
        )
    }
}


export default SingleFilm