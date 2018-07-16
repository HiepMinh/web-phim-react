import React from "react";
import {
    ListItem,
    Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

class NavbarItem extends React.Component {
    render() {
        const { To, Text, classes } = this.props;
        return (
            <ListItem
                button
                component={Link}
                to={To}
                className={classes.ListItem}
            >
                <Typography
                    variant="button"
                    className={classes.Button}
                >
                    {Text}
                </Typography>
            </ListItem>
        );
    }
}

export default NavbarItem;