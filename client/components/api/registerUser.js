import httpRequest from './task_api';

const registerUser = (username, password, firstname, lastname, successResponse, errorResponse) => {
    console.log("Calling register api");
    const successRes = (response) => {
        console.log('success');
        console.log(response);
        if (response.status == '200') {
            successResponse(response.body);
        } else {
            errorResponsae(response.body);
        }
    }

    const errorRes = (response) => {
        console.log('error');
        console.log(response);
        return errorResponse(response.body);
    }

    console.log("Local Handlers added");
    httpRequest('http://localhost:5000/api/users', 'POST', {'username': username, 'password': password, 'firstname': firstname, 'lastname': lastname}, successRes, errorRes);
}

// registerUser('nicholas-shi', 'samplePassword', 'Nicholas', 'Shi', (response)=>{console.log(response), (response)=>{console.log(response)}})

// export default registerUser;
module.exports = registerUser;