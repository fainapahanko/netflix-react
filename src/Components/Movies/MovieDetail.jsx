import React from 'react'
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import CommentList from '../Comments/CommentList'
import AddComment from '../Comments/AddComment'

class MovieDetail extends React.Component {
    state = {
        comments: [],
        film: undefined
    }

    componentDidMount = async () => {

        //fetching comments
        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)

        let commentResponse = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + this.props.match.params.movieId,{
            method: "GET",
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })
        let commentInfo = await commentResponse.json()

        //fetching filmx
        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&i=" + this.props.match.params.movieId)
        let filmsInfo = await response.json();

        //setting state
        await this.setState({
            film: filmsInfo,
            comments: commentInfo
        })
    }

    render(){
        return(
            <Row className="details-page">
                <Col md="4">
                    {this.state.film && <img src={this.state.film.Poster} alt=""/>}
                </Col>
                <Col md="4">
                    <ListGroup>
                        {this.state.film && <ListGroupItem>
                            Title:<br/>
                            {this.state.film.Title}</ListGroupItem>}
                        {this.state.film &&<ListGroupItem>
                            Plot:<br/>{this.state.film.Plot}</ListGroupItem>}
                        {this.state.film &&<ListGroupItem>
                            Cast:<br/>{this.state.film.Actors}</ListGroupItem>}
                        {this.state.film &&<ListGroupItem> 
                            Director:<br/>{this.state.film.Director}</ListGroupItem>}
                        {this.state.film &&<ListGroupItem>
                            Runtime: <br/>{this.state.film.Runtime}</ListGroupItem>}
                    </ListGroup>
                </Col>
                <Col md="4">
                    <AddComment filmId={this.props.match.params.movieId}/>
                </Col>
                <Col className="comments" md="12">
                    {this.state.comments && <CommentList comments={this.state.comments} filmId={this.props.match.params.movieId}/>}
                </Col>
            </Row>
        )
    }
}

export default MovieDetail