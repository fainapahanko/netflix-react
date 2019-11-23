import React from 'react'
import '../index.css'
import CommentList from './CommentList'
import AddComment from './AddComment'

import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

class DetailsPage extends React.Component{
    state = {
        selectedFilm: "",
        comments: ""
    }
    componentDidMount = async () => {
        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)
        let response = await fetch("http://www.omdbapi.com/?apikey=ad6a24df&i=" + this.props.film.imdbID)
        let commentResponse = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + this.props.film.imdbID,{
            method: "GET",
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })
        let filmInfo = await response.json()
        let commentInfo = await commentResponse.json()
        console.log(filmInfo)
        await this.setState({
            selectedFilm: filmInfo,
            commentInfo: commentInfo
        })
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
                            {this.state.selectedFilm.Title}</ListGroupItem>
                        <ListGroupItem>
                            Plot:<br/>{this.state.selectedFilm.Plot}</ListGroupItem>
                        <ListGroupItem>
                            Cast:<br/>{this.state.selectedFilm.Actors}</ListGroupItem>
                        <ListGroupItem> 
                            Director:<br/>{this.state.selectedFilm.Director}</ListGroupItem>
                        <ListGroupItem>
                            Runtime: <br/>{this.state.selectedFilm.Runtime}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md="4">
                    <Row>
                        <Col mad="12">
                            {this.state.comments && <CommentList commentList={this.state.comments} />}
                        </Col>
                        <Col md="12">
                            <AddComment />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default DetailsPage