import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

class CommentList extends React.Component{
    state = {
    }

    render(){
        return(
            <ListGroup>
                {this.props.comments.map((comment, index)=>
                <ListGroupItem key={index}>Comment: <br/>{comment.comment} <br/> Rate: <br/> {comment.rate}</ListGroupItem>
                )}
            </ListGroup>
        )
    }
}

export default CommentList 