import React from 'react'

class CommentList extends React.Component{
    state = {}
    componentDidMount = async ()=>{
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + this.props.commentList.elementId)
    }
    render(){
        return(
            <h1>Lol</h1>
        )
    }
}

export default CommentList 