import React from 'react'
import '../index.css'
import {Alert} from 'reactstrap'

const ErrorMessage = () => {
    return(
        <Alert color="danger">
        Something went wrong. Try later
        </Alert>
    )
}

export default ErrorMessage