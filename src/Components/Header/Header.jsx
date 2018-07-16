import React from "react";
import {    
    AppBar,
    Toolbar,
    Grid,
} from "@material-ui/core";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Auth from "./../Auth/Auth";

class Header extends React.Component {
    render(){
        const { fixed, bgColor } = this.props;
        return (
            <AppBar 
                position={fixed}
                color={bgColor}
            >
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item md={2}>
                            <Logo 
                                imgWidth="30"
                            />
                        </Grid>

                        <Grid item md={8}>
                            <Navbar />
                        </Grid>

                        <Grid item md={2}>
                            <Auth />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;