import axios from 'axios';
const API_BASE_URL = 'http://178.63.13.157:8090/mock-api/api';

export const fetchUsers = () => {
  axios
    .get(`${API_BASE_URL}/users`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.error(`Something went wrong ${error}`));
};

export const fetchProjects = () => {
  axios
    .get(`${API_BASE_URL}/projects`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.error(`Something went wrong ${error}`));
};

export const fetchGateways = () => {
  axios
    .get(`${API_BASE_URL}/gateways`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.error(`Something went wrong ${error}`));
};

export const postReport = () => {
  axios
    .post(`${API_BASE_URL}/report`, {})
    .then(res => {
      return res.data[0];
    })
    .catch(error => console.error(`Something went wrong ${error}`));
};
