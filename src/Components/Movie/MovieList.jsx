import React, { Component } from "react";
import MovieItem from "./MovieItem";
import {
    Grid,
    withStyles
} from "@material-ui/core";
import URL from "./../../Constants/API_URl.jsx";
import API_SERVICE from "./../../Ultils/Movie";
import Loading from "../Loading/Loading";
import Slider from "react-slick";

const styles = () => ({
    Slider: {
        width: "85%",
        margin: "6rem auto 0"
    }
})

class MovieList extends Component {

    state = {
        MovieList: [],
        spacing: '32',
    }
    componentDidMount() {
        API_SERVICE(URL.API_GET_MOVIELIST, "GET", null)
            .then((MovieList) => {
                this.setState({
                    MovieList: MovieList.data
                })
            })
    }

    render() {
        const { spacing, MovieList } = this.state;
        console.log(MovieList);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        };
        return (
            <Slider {...settings} className={this.props.classes.Slider}>
                {this.showMovieList(MovieList)}
            </Slider>
        );
    }
    showMovieList = (MovieList) => {
        let res = <Loading />;
        if (MovieList.length > 0) {
            res = MovieList.map(movie => {
                return (
                    <MovieItem
                        key={movie.MaPhim}
                        movie={movie}
                    />
                );
            })
        }
        return res;
    }
}

export default withStyles(styles)(MovieList);