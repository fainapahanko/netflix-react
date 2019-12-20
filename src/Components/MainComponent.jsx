import React from 'react';

//components
import Home from '../Components/LoaderPage/Home'
import Navigation from '../Components/Nav/Navigation'
import MoviesList from '../Components/Movies/MoviesList'
import MovieDetail from '../Components/Movies/MovieDetail'
import NewHomeCinema from '../Components/New/NewHomeCinema'
import SendPdf from '../Components/New/SendPdf'

//style+reactstrap
import {Container, Row} from 'reactstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MainComponent = () => {
    return(
        <Router>
            <Navigation />
            <Route path="/" exact component={Home}/>
            <Container>
                <Row>
                    <Route path="/movielist" component={MoviesList}/>
                    <Route path="/details:movieId" component={MovieDetail} />
                    <Route path="/nodejslol" component={NewHomeCinema} />
                    <Route path="/send-me-pdf" component={SendPdf} />
                </Row>
            </Container>
        </Router>
    )
}


export default MainComponent 