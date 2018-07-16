import React from "react";
import Login from "./Login";
import Register from "./Register";

class Auth extends React.Component {
    render(){
        return (
            <div style={{ display: "flex" }}>
                <Login />
                <Register />
            </div>
        );
    }
}

export default Auth;