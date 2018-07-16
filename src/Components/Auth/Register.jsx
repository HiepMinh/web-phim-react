import React from "react";
import { Button, Tooltip } from "../../../node_modules/@material-ui/core";
import RegisterIcon from "@material-ui/icons/AssignmentInd";

class Register extends React.Component {
    render() {
        return (
            <Tooltip title="Đăng Kí" placement="bottom">
                <Button>
                    <RegisterIcon />
                </Button>
            </Tooltip>
        );
    }
}

export default Register;