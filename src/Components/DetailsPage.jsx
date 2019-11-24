import React from 'react'
import '../index.css'
import CommentList from './CommentList'
import AddComment from './AddComment'

import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

class DetailsPage extends React.Component{
    state = {
        comments: []
    }
    componentDidMount = async () => {
        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)

        let commentResponse = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + this.props.film.imdbID,{
            method: "GET",
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })
        let commentInfo = await commentResponse.json()
        await this.setState({
            comments: commentInfo
        })
        console.log("commentInfo",commentInfo)
        console.log(this.state.comments)
    }

    render(){
        return(
            <Row className="details-page">
                <Col md="4">
                    <img src={this.props.film.Poster} alt=""/>
                </Col>
                <Col md="4">
                    <ListGroup>
                        <ListGroupItem>
                            Title:<br/>
                            {this.props.film.Title}</ListGroupItem>
                        <ListGroupItem>
                            Plot:<br/>{this.props.film.Plot}</ListGroupItem>
                        <ListGroupItem>
                            Cast:<br/>{this.props.film.Actors}</ListGroupItem>
                        <ListGroupItem> 
                            Director:<br/>{this.props.film.Director}</ListGroupItem>
                        <ListGroupItem>
                            Runtime: <br/>{this.props.film.Runtime}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md="4">
                    <AddComment filmId={this.props.film.imdbID}/>
                </Col>
                <Col className="comments" md="12">
                    {this.state.comments && <CommentList comments={this.state.comments} filmId={this.props.film.imdbID}/>}
                </Col>
            </Row>
        )
    }
}

export default DetailsPage