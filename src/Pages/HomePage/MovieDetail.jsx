import React, { Fragment } from "react";
import API_SERVICE from "./../../Ultils/Movie";
import URL from "./../../Constants/API_URl";

import { withStyles } from '@material-ui/core/styles';
import CardMovie from "../../Components/MovieDetail/CardMovie";
import InfoMovie from "../../Components/MovieDetail/InfoMovie";
import { Grid } from "../../../node_modules/@material-ui/core";
import Loading from "./../../Components/Loading/Loading";

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

class MovieDetail extends React.Component {
    state = {
        MovieList: [],
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
        let { MovieList } = this.state;
        let id = parseInt(this.props.match.params.id);
        return (
            <Fragment>
                { this.findMovieById(id, MovieList) }
            </Fragment>
        );
    }
    findMovieById = (id, MovieList) => {
        let res = null;
        if (MovieList.length > 0) {
            res = MovieList.filter((movie) => movie.MaPhim === id);
        }
        return res = (res !== null) ? 
        (
            <Grid container>
                <Grid item xs={6}>
                    <CardMovie 
                        MovieDetail={res[0]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InfoMovie 
                      MovieDetail={res[0]}
                    />
                </Grid>
            </Grid>
        ) : 
        (   
            <Loading />
        )
        ;
    }
}

export default withStyles(styles)(MovieDetail);