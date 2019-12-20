import React from 'react'
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import CommentList from '../Comments/CommentList'
import AddComment from '../Comments/AddComment'
import { MagicSpinner } from "react-spinners-kit";
import '../../index.css'

class MovieDetail extends React.Component {
    state = {
        comments: [],
        film: undefined,
        loading: true
    }

    render(){
        return(
            <Row className="details-page">
                {this.state.loading && <div style = {{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <MagicSpinner  className="spinner-details" size={100} color="#73C991"/>
                    </div>}
                <Col className="col-lg-4 col-sm-12 details-item">
                    {this.state.film && <img src={this.state.film.Poster} alt=""/>}
                </Col>
                <Col className="col-lg-4 col-sm-12 details-item">
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
                <Col className="col-lg-4 col-sm-12 details-item">
                    {!this.state.loading &&
                    <AddComment filmId={this.props.match.params.movieId}/>}
                </Col>
                <Col className="comments details-item" md="12">
                    {this.state.comments && <CommentList comments={this.state.comments} filmId={this.props.match.params.movieId}/>}
                </Col>
            </Row>
        )
    }
    componentDidMount = async () => {
        await this.fetchingDetails()
        await this.fetchingComments()
    }



    fetchingDetails = async () => {
        this.setState({
            loading:true
        })
        let response = await fetch("http://localhost:3333/media/" + this.props.match.params.movieId)
        let filmsInfo = await response.json();

        setTimeout(()=> {
            this.setState({
                film: filmsInfo,
            })
        }, 2000)
    }

    fetchingComments = async() => {
        this.setState({
            loading:true
        })
        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)

        let commentResponse = await fetch("http://localhost:3333/reviews?elementId=" + this.props.match.params.movieId,{
            method: "GET",
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })
        let commentInfo = await commentResponse.json()
        setTimeout(()=>{
            this.setState({
                comments: commentInfo,
                loading:false
            })
        },2000)
    }
}

export default MovieDetail