import React from 'react'
import {Alert} from 'reactstrap'
import '../index.css'

class SuccesMessage extends React.Component{
    render(){
        return(
            <Alert color="success">
            Saved succesfully
          </Alert>
        )
    }
}

export default SuccesMessage 