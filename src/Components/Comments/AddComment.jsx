import React from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import ErrorMessage from '../Alerts/ErrorMessage'
import SuccesMessage from '../Alerts/SuccesMessage'
import '../../index.css'

class AddComment extends React.Component{
    state = {
        comment: {},
        file: null,
        error: "",
        succes: ""
    }
    handleInput = (ev) => {
        ev.preventDefault()
        if(ev.target.id === "image"){
            this.setState({
                file: ev.target.files[0]
            })
        }
        this.setState({
            comment: Object.assign(this.state.comment, {[ev.target.id]: ev.target.value})
        })
    }
    
    addComment = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", this.state.file)
        formData.append("rate",this.state.comment.rate)
        formData.append("comment",this.state.comment.comment)
        this.setState({
            error: "",
            succes: ""
        })
        let response = await fetch("http://localhost:3333/reviews/" + this.props.filmId,{
            method: "POST",
            body: formData
        })
        if(response.ok){
            this.setState({
                comment: {
                    comment: "",
                    rate: "",
                    elementId: ""
                },
                succes: "succes"
            })
        } else {
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
            <Form onSubmit={this.addComment}>
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
                <FormGroup>
                    <Label>Image</Label>
                    <Input onChange={this.handleInput} type="file" id="image"></Input>
                </FormGroup>
                <Button type="submit" id="elementId" outline color="danger">Add comments</Button>
                {this.state.error && <ErrorMessage />}
                {this.state.succes && <SuccesMessage />}
            </Form>
        )
    }
}

export default AddComment