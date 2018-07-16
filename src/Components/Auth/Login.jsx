import React from "react";
import {
    Button,
    Tooltip
} from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";

class Login extends React.Component {
    render() {
        return (
            <Tooltip title="Đăng Nhập" placement="bottom">
                <Button>
                    <InputIcon />
                </Button>
            </Tooltip>
        );
    }
}

export default Login;