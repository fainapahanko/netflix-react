import React from 'react';
import Moment from 'react-moment'
import {ListGroup, ListGroupItem} from 'reactstrap'
import StarRatings from 'react-star-ratings';
const divStyle = {
    margin: "20px 0px",
}

class SingleComment extends React.Component {
    state = { 
        rate: 4
     }
     componentDidMount = () => {
        const rate = parseInt(this.props.comm.rate)
        this.setState({
            rate: rate
        })
     }
    render() {
        return ( 
            <ListGroup style={divStyle}> 
                 <ListGroupItem>
                Commet: {this.props.comm.comment}
                <div>
                <StarRatings 
                starDimension="15px"
                starSpacing="2px"
                rating={this.state.rate}
                starRatedColor="#FF4F40"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
                /></div>
                {this.props.comm.createdAt && <div>Posted <Moment fromNow>{this.props.comm.createdAt}</Moment></div>}
                </ListGroupItem>
            </ListGroup>
         );
    }
}
 
export default SingleComment;