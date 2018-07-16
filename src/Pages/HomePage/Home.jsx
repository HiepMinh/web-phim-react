import React from "react";
import Header from "./../../Components/Header/Header";
import MovieList from "../../Components/Movie/MovieList";

class Home extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header 
                    fixed="fixed"
                    bgColor="default"/>
                <MovieList />
            </div>
        );
    }
}

export default Home;