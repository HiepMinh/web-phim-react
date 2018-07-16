import React from "react";
import {
    Typography,
    Button,
    withStyles
} from "../../../node_modules/@material-ui/core";

const style = () => ({
    Typography: {
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1
    }
})

class Logo extends React.Component {
    render() {
        const { classes, imgWidth } = this.props;
        return (
            <Button style={{ display: "flex", alignItems: "center" }}>
                <img
                    src={window.location.origin + "/Assets/Images/logo.svg"}
                    alt=""
                    style={{ width: Number(imgWidth), marginRight: 10 }}
                />
                <Typography
                    variant="headline"
                    component="h3"
                    className={classes.Typography}
                >
                    Movie Project
                </Typography>
            </Button>
        );
    }
}
export default withStyles(style)(Logo);
