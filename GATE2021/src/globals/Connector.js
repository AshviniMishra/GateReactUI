import axios from 'axios';

class Connector {
    static sendGetRequest(url, ...params) {
        axios.get(url, {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    static sendPostRequest(url, ...params) {
        axios.post(url, params)
            .then(response => {
                console.log('1' + response);
            })
            .catch(error => {
                console.log('1' + error);
            })
            .then(res => {
                console.log('1' + res);
            });
    }

    static sendPostRequest(url, param) {
        axios.post(url, param)
            .then(response => {
                console.log('2' + response);
            })
            .catch(error => {
                console.log('2' + error);
            })
            .then(res => {
                console.log('2' + res);
            });
    }
}

export default Connector;