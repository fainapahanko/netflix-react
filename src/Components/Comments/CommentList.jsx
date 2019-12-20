import React from 'react'
import {ListGroup} from 'reactstrap'
import SingleComment from './SingleComment'

const CommentList = props =>{
    return(
        <ListGroup>
            {props.comments.map((comment, index)=>
            <SingleComment key={index} comm={comment} />
            )}
        </ListGroup>
    )
}


export default CommentList 