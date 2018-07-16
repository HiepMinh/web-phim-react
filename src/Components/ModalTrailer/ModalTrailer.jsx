import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from "@material-ui/icons/Close";

class ModalTrailer extends React.Component {
    state = {
        open: false,
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    componentWillMount() {
        this.setState({
            open: this.props.open
        })
    }
    render() {
        let { trailer } = this.props;
        trailer = trailer.replace("watch?v=", "embed/");
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
            >
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <DialogContent style={{ padding: 0, background: "#000" }}>
                    <iframe
                        width="700"
                        height="400"
                        style={{ maxWidth: "100%", border: 0 }}
                        src={trailer + "?autoplay=1"} 
                        title=""
                        >
                    </iframe>
                </DialogContent>
            </Dialog >
        );
    }
}

export default ModalTrailer;