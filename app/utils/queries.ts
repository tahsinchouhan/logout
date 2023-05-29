import axios from 'axios';

const apiPath = 'https://reqres.in/api';

const getUsers = () => {
  axios
    .get(`${apiPath}/users`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

export {getUsers};
