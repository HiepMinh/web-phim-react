import React, { Component,Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Button,
    Tooltip,
    Zoom,
    Typography,
    Grid
} from "../../../node_modules/@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import TrailerIcon from "@material-ui/icons/PlayArrow";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import Slug_URL from "./../../Constants/CONFIG_URL";

const style = (theme) => ({
    OneBlockMovie: {
        position: "relative",
        overflow: "hidden",
        borderRadius: ".4rem",
        boxShadow: "0 0 4px 4px #d0c4c4",
        margin: "0 15px",
        minHeight: "auto"
    },
    overlay: {
        position: "absolute",
        zIndex: 2,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, #000000c9, 31%, #fff0, 70%, #ffffff38)"
    },
    InfoMovie: {
        position: "absolute",
        zIndex: 4,
        bottom: "15%",
        width: "100%",
        left: 0,
        padding: "0 14px"
    },
    NameMovie: {
        fontSize: "23px",
        margin: "10px 0",
        color: "#fff",
    },
    DateMovie: {
        fontSize: "12px",
        margin: 0,
        color: "#fff",
    },
    imgMovie: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        minWidth: "100%",
        minHeight: "410px"
    },
    BtnMovie: {
        position: "absolute",
        zIndex: 3,
        display: "flex",
        bottom: 0,
        width: "100%",
        left: 0
    },
    btn: {
        padding: ".7rem",
        borderRadius: "0!important",
        // color: theme.palette.getContrastText(lightGreen.A700),
        backgroundColor: lightGreen.A700,
        color: "#fff",
        fontWeight: "bold",
        '&:hover': {
            transition: ".4s",
            backgroundColor: lightGreen.A400,
        },
    },
    btnDatVe: {
        width: "75%",
    },
    btnTrailer: {
        width: "25%",
    }
})

class MovieItem extends Component {
    state = { 
        isShowTrailer : false,
        trailerUrl : ''
    }
    render() {
        let { classes, movie } = this.props;
        let { isShowTrailer } = this.state;
        movie.TenPhim = Slug_URL(movie.TenPhim);
        return (
            <Fragment>
                <div className={classes.OneBlockMovie}>
                    <div className={classes.overlay} />
                    <div className={classes.imgMovie}>
                        <img src={movie.HinhAnh}
                            className={classes.img}
                            alt={movie.HinhAnh}
                        />
                    </div>
                    <div className={classes.InfoMovie}>
                        <Typography component="h5" className={classes.DateMovie}>
                            {movie.NgayKhoiChieu}
                        </Typography>
                        <Typography component="h2" className={classes.NameMovie}>
                            {movie.TenPhim}
                        </Typography>
                    </div>
                    <div className={classes.BtnMovie}>
                        <Button
                            component={Link}
                            to={`/moviedetail/tenphim=${movie.TenPhim}&maphim=${movie.MaPhim}`}
                            variant="contained"
                            className={`${classes.btn} ${classes.btnDatVe}`}
                        >
                            <Typography variant="button">
                                Đặt Vé
                            </Typography>
                        </Button>
                        <Tooltip
                            title="Trailer"
                            TransitionComponent={Zoom}
                            placement="bottom"
                        >
                            <Button
                                variant="contained"
                                className={`${classes.btn} ${classes.btnTrailer}`}
                                onClick={ () => this.ChangeFlagTrailer(movie.Trailer) }
                            >
                                <TrailerIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                { 
                    isShowTrailer &&
                    this.showTrailer(movie.Trailer) 
                }
            </Fragment>

        );
    }
    ChangeFlagTrailer = (trailerUrl) => {
        this.setState({
            trailerUrl,
            isShowTrailer : !this.state.isShowTrailer
        })
    }
    showTrailer = (trailer) => {
        const { trailerUrl, isShowTrailer } = this.state;
       return (
            <ModalTrailer 
                open={isShowTrailer}
                trailer={trailerUrl}
            />
       );
    }
}

export default withStyles(style)(MovieItem);