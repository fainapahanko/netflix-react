import React from 'react'
import '../index.css'
import CommentList from './CommentList'
import AddComment from './AddComment'

import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

const DetailsPage = props =>{
    return(
        <Row className="details-page">
            <Col md="4">
                <img src={props.film.Poster} alt=""/>
            </Col>
            <Col md="4">
                <ListGroup>
                    <ListGroupItem>
                        Title:<br/>
                        {props.film.Title}</ListGroupItem>
                    <ListGroupItem>
                        Plot:<br/>{props.film.Plot}</ListGroupItem>
                    <ListGroupItem>
                        Cast:<br/>{props.film.Actors}</ListGroupItem>
                    <ListGroupItem> 
                        Director:<br/>{props.film.Director}</ListGroupItem>
                    <ListGroupItem>
                        Runtime: <br/>{props.film.Runtime}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md="4">
                <AddComment filmId={props.film.imdbID}/>
            </Col>
            <Col className="comments" md="12">
                {props.comment && <CommentList comments={props.comment} filmId={props.film.imdbID}/>}
            </Col>
        </Row>
    )
}


export default DetailsPage