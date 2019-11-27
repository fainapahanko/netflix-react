import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../index.css'

const Home = () => {
  return (
    <div>
      <Jumbotron>
          <Link to="/movielist" >
            <Button className="jumbotron-button">Go to cinema</Button>
          </Link>
      </Jumbotron>
    </div>
  )
}

export default Home