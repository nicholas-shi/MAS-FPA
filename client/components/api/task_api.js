// const axios = require('axios');

const getToken = () => {
    return null;
}

const httpRequest = (url, method, body, successResponse, errorReponse) => {
    console.log("Entered httpRequest");
    header = {
        'x-auth-token': getToken()
    }
    if (method == 'POST' || method == 'PUT')
        header['Content-Type'] = 'application/json' // Maybe not needed?

    // if (method == 'GET') {
    //     axios.get(url, body).then((response) => successResponse(response))
    //     .then((response) => errorReponse(response));
    // } else {
    //     axios.get(url, body).then((response) => successResponse(response))
    //     .then((response) => errorReponse(response));
    // }
    // fetch('http://facebook.github.io/react-native/movies.json').then((response) => successResponse(response))
    // .then((response) => errorReponse(response)).catch((error) => console.log(error));

    fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });

}

export default httpRequest;