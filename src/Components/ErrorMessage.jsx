import React from 'react'
import '../index.css'
import {Alert} from 'reactstrap'

class ErrorMessage extends React.Component{
    render(){
        return(
            <Alert color="danger">
            Something went wrong. Try later
          </Alert>
        )
    }
}

export default ErrorMessage