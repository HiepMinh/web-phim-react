import React from "react";
import {
    CircularProgress,
    withStyles
} from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
        color: "linear-gradient(to top, #e8198b 0%, #c7eafd 100%)"
    },
    loading: {
        position: "relative",
        zIndex : "2",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
});

class Loading extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.loading}>
                <CircularProgress
                    size={70}
                    className={classes.progress}
                    thickness={7}
                />
            </div>

        );
    }
}

export default withStyles(styles)(Loading);