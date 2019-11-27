import React from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import ErrorMessage from '../Alerts/ErrorMessage'
import SuccesMessage from '../Alerts/SuccesMessage'
import '../../index.css'

class AddComment extends React.Component{
    state = {
        comment: {
            comment: "",
            rate: 1,
            elementId: ""
        },
        error: "",
        succes: ""
    }
    handleInput = (ev) => {
        let input = ev.target
        let value = input.value
        let comment = input.id
        let newComment = this.state.comment
        newComment[comment] = value
        this.setState({
            comment: newComment
        })
        console.log(value)
    }
    
    addComment = async(ev) => {
        this.setState({
            error: "",
            succes: ""
        })
        let filmId = this.props.filmId
        let newComment = this.state.comment
        newComment[ev.target.id] = filmId
        this.setState({
            comment: newComment,
            error: "",
            succes: ""
        })

        let username = "user15"
        let password = "sHHU5KWmVE26avC8"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/",{
            method: "POST",
            body: JSON.stringify(this.state.comment),
            headers: {
                "authorization" : "Basic " + token,
                "Content-Type" : "application/json"
            }
        })

        if(response.ok){
            console.log(this.state.comment)
            this.setState({
                comment: {
                    comment: "",
                    rate: "",
                    elementId: ""
                },
                succes: "succes"
            })
        } else {
            console.log("smth went wrong")
            this.setState({
                comment: {
                    comment: "",
                    rate: "",
                    elementId: ""
                },
                error: "error"
            })
        }
    }
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="comment">Your comment</Label>
                    <Input 
                        onChange={this.handleInput}
                        type="textarea"
                        className="commentsArea" 
                        name="password" 
                        id="comment" placeholder="password placeholder"
                        required
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="rate">Your rate</Label>
                    <Input 
                        type="select" 
                        onChange={this.handleInput}
                        name="select" 
                        id="rate"
                        required
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <Button onClick={this.addComment} id="elementId" outline color="danger">Add comments</Button>
                {this.state.error && <ErrorMessage />}
                {this.state.succes && <SuccesMessage />}
            </Form>
        )
    }
}

export default AddComment