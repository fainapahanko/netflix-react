import React from 'react'
import {
    Col
  } from 'reactstrap';
import SingleFilm from './SingleFilm'
import Slider from "react-slick";
// var arr = [{state: "Star",name: "Star Wars",id: "star%20wars"}, {state: "Harry",name: "Harry Potter",id: "harry%20potter"}]


class ListFilms extends React.Component{
    state = {
        dragging: false,
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 5,
            slidesToScroll: 1,
            beforeChange: () => this.setState({ dragging: true }),
            afterChange: () => this.setState({ dragging: false }),
        }
        return(

            <Col md="12" className="div-with-slick-carousel">
                <h2 className="title">{this.props.movie.title}</h2>
                <Slider {...settings}>
                    {this.props.movie.info
                        .map((m,index) => 
                        <SingleFilm selectFilm={this.props.onSelected} film={m} key={index}
                        />
                    )}
                </Slider>
            </Col>
        )
    }
}



export default ListFilms