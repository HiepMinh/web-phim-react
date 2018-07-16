import React from "react";
import {
    List,
    withStyles
} from "@material-ui/core";
import NavbarItem from "./NavbarItem";

const style = () => ({
    List: {
        display: "flex", 
        justifyContent: "center"
    },
    ListItem : {
        width: "auto",
        transition: ".4s"
    },
    Button : {
        fontSize : ".7em",
    }
})

const LinkMenus = [
    {
        // to : "/",
        // exact : true,
        // component : Home
        Text : "Trang Chủ",
        LinkTo : "/"
    },
    {
        Text : "Phim",
        LinkTo : "/"
    },
    {
        Text : "Tin Tức",
        LinkTo : "/"
    },
    {
        Text : "Tìm Kiếm Phim",
        LinkTo : ""
    }
];


class Navbar extends React.Component {
    render() {
        const { classes } =  this.props;
        return (
            <List className={ classes.List }>
                { this.showNavbarItem(LinkMenus, classes) }
            </List>
        );
    }
    
    showNavbarItem = (links, classes) => {
        let res = null;
        if(links.length > 0){
            res = links.map((link, index) => {
                return (
                    <NavbarItem 
                        To={link.LinkTo}
                        key={index}
                        Text={link.Text}
                        classes={classes}
                    />
                );
            })
        }
        return res;
    }   
}

export default withStyles(style)(Navbar);