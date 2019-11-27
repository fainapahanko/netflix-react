import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

const CommentList = props =>{
    return(
        <ListGroup>
            {props.comments.map((comment, index)=>
            <ListGroupItem key={index}>Comment: <br/>{comment.comment} <br/> Rate: <br/> {comment.rate}</ListGroupItem>
            )}
        </ListGroup>
    )
}


export default CommentList 