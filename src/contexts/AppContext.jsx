import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://178.63.13.157:8090/mock-api/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [report, setreport] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchProjects();
    fetchGateways();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`${API_BASE_URL}/users`)
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  const fetchProjects = () => {
    axios
      .get(`${API_BASE_URL}/projects`)
      .then(res => {
        setProjects(res.data.data);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  const fetchGateways = () => {
    axios
      .get(`${API_BASE_URL}/gateways`)
      .then(res => {
        setGateways(res.data.data);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  //   const postReport = () => {
  //     axios
  //       .post(`${API_BASE_URL}/report`, {})
  //       .then(res => {
  //         setreport(res.data.data);
  //       })
  //       .catch(error => console.error(`Something went wrong ${error}`));
  //   };

  console.log(users);
  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        projects,
        setProjects,
        gateways,
        setGateways,
        report,
        setreport,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
