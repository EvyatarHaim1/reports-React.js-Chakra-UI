import axios from 'axios';
const BASE_URL = process.env.API_BASE_URL;

export const fetchUsers = () => {
  axios
    .get({ BASE_URL })
    .then(res => {
      return res.data[0];
    })
    .catch(error => console.error(`Something went wrong ${error}`));
};
