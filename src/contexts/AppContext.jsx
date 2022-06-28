import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://178.63.13.157:8090/mock-api/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setreports] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('Report');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isOpenModal, setOpenModal] = useState(true);
  const [projectsState, setProjectsState] = useState('');
  const [gatewaysState, setGatewaysState] = useState('');

  useEffect(() => {
    fetchUsers();
    fetchProjects();
    fetchGateways();
  }, []);

  useEffect(() => {
    if (projectsState === 'project 1') {
      if (gatewaysState === 'Gateway 1') {
        setCurrentScreen('ProjectOneGatewayOne');
      } else {
        setCurrentScreen('ProjectOneAllGateways');
      }
    }
  }, [projectsState, gatewaysState, currentScreen]);

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

  const postReport = (fromDate, toDate) => {
    axios
      .post(`${API_BASE_URL}/report`, { from: fromDate, to: toDate })
      .then(res => {
        setreports(res.data.data);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

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
        reports,
        setreports,
        currentScreen,
        setCurrentScreen,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        postReport,
        isOpenModal,
        closeModal,
        openModal,
        setOpenModal,
        projectsState,
        setProjectsState,
        gatewaysState,
        setGatewaysState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
