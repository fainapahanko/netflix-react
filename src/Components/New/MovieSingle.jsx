import React from 'react';
import {Card, CardImg, Col, CardBody} from 'reactstrap'
import '../../index.css'
import {Link} from 'react-router-dom'
const styleDiv = {
    backgroundColor: "rgba(255,255,1,0.5)"
}

class MovieSingle extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Col md="3">
                <Card style={styleDiv}  className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Link to={"/details" + this.props.film.imdbID} style={{ textDecoration: 'none', color: "white" }}>
                        <CardImg top height="300px" className="card-with-poster"  src={this.props.film.Poster} alt="Card image cap" />
                        <CardBody>{this.props.film.Title}</CardBody>
                    </Link>
                </Card>
            </Col>
         );
    }
}
 
export default MovieSingle;