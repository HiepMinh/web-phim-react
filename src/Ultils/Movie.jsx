import axios from "axios";

const API_SERVICE = (url, method, data) => {
    return (
        axios({
            method ,
            url,
            data
        }).catch(err => console.log(err))
    );

}

export default API_SERVICE;







