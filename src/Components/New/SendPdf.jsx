import React from 'react';
import { FormGroup, Label, Button, Input, Form } from 'reactstrap';

class SendPdf extends React.Component {
    state = {  }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    sendPdf = async(e) => {
        console.log(this.state)
        e.preventDefault()
        let response = await fetch("http://localhost:3333/catalogue?title="+ this.state.name + "&email=" + this.state.email,{
            method: "GET"
        })
        if(response.ok){
            console.log("checkyour email")
        }
    }
    render() { 
        return ( 
            <Form onSubmit={this.sendPdf}>
                <FormGroup>
                    <Label>Enter your mail</Label>
                    <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label>Enter film title</Label>
                    <Input onChange={this.handleChange} type="text" id="name" placeholder="harry potter" />
                    <Button type="submit">Send me pdf</Button>
                </FormGroup>
            </Form>
        );
    }
}
 
export default SendPdf;