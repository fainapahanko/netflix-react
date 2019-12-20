import React from 'react';
import MovieSingle from './MovieSingle'
import {Container, Row, Button, Collapse, Card, CardBody, Input, Label} from 'reactstrap'

class NewHomeCinema extends React.Component {
    state = { 
        movies: [],
        isOpen: false,
        searchedFilms: [],
        years: []
     }
     toggleOpen = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
     }
    componentDidMount = () => {
        this.fetchMovies()
        this.generateYears()
    }
    filterFilms = async() => {
        console.log(this.state)
        let response = await fetch("http://localhost:3333/media/&s=" + this.state.Title,{
            method: "GET"
        })
        let filmsIncorrect = await response.json()
        let films = filmsIncorrect.Search
        console.log(films)
        if(this.state.Year){
            let filtered = films.filter(film => film.Year === this.state.Year)
            this.setState({
                searchedFilms: filtered
            })
        } else {
            this.setState({
                searchedFilms: films
            })
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    fetchMovies = async() => {
        let response = await fetch("http://localhost:3333/media" ,{
            method: "GET"
        })
        let films = await response.json()
        this.setState({
            movies: films
        })
    }
    generateYears = () => {
        for(var i = 1900; i < 2019; i++){
            this.state.years.push(i)
        }
    }
    render() { 
        return ( 
            <Container>
                <div>
                <Button onClick={this.toggleOpen} color="info" className="my-3">Add filters</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <Card>
                    <CardBody>
                        <Label>Title</Label>
                        <Input onChange={this.handleChange} type="text" id="Title"></Input>
                    </CardBody>
                    <CardBody>
                        <Label>Select Year</Label>
                        <Input onChange={this.handleChange} type="select" id="Year">
                        {this.state.years && this.state.years.map((y,i) => <option className="Year" key={i}>{y}</option>)}
                        </Input>
                    </CardBody>
                    </Card>
                    <Button onClick={this.filterFilms} color="info" className="my-3">Filter</Button>
                </Collapse>
                </div>
                <Row>
                    {this.state.searchedFilms && this.state.searchedFilms.map((m,i) => <MovieSingle film={m} key={i} />)}
                    {this.state.movies && this.state.movies.map((m,i) => <MovieSingle film={m} key={i} />)}
                </Row>
            </Container>
        );
    }
}
 
export default NewHomeCinema;