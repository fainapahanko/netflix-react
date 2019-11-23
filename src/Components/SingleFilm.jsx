import React from 'react'
import {
    Card, CardImg
  } from 'reactstrap'
  import '../index.css'

class SingleFilm extends React.Component{
    state = {}
    render () {
        return(
            <Card className="col-lg-3 col-md-4 col-sm-6 col-12">
              <CardImg top height="300px" onClick={()=>this.props.selectFilm(this.props.film)} className="card-with-poster"  src={this.props.film.Poster} alt="Card image cap" />
            </Card>
        )
    }
}


export default SingleFilm