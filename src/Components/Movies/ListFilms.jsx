import React from 'react'
import { Col } from 'reactstrap';
import SingleFilm from '../Movies/SingleFilm'
import Slider from "react-slick";


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
        console.log(this.props)
        return(
            <Col md="12" className="div-with-slick-carousel">
                <h2 className="title">{this.props.movie.title}</h2>
                <Slider {...settings}>
                    {this.props.movie.info
                        .map((m,index) => 
                        <SingleFilm film={m} key={index}
                        />
                    )}
                </Slider>
            </Col>
        )
    }
}

export default ListFilms