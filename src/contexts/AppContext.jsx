import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://178.63.13.157:8090/mock-api/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('Report');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isOpenModal, setOpenModal] = useState(true);
  const [isProjectModal, setProjectModal] = useState(false);
  const [isGatewayModal, setGatewayModal] = useState(false);
  const [projectsState, setProjectsState] = useState('');
  const [gatewaysState, setGatewaysState] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchProjects();
    fetchGateways();
  }, []);

  useEffect(() => {
    if (projectsState === 'Project 1') {
      if (gatewaysState === 'Gateway 1') {
        setCurrentScreen('ProjectOneGatewayOne');
      } else {
        setCurrentScreen('ProjectOneAllGateways');
      }
    } else if (projectsState === 'All Projects') {
      if (gatewaysState === 'Gateway 1') {
        setCurrentScreen('AllProjectsGatewayOne');
      } else {
        setCurrentScreen('AllProjectsAllGateways');
      }
    }
  }, [projectsState, gatewaysState]);

  useEffect(() => {
    if (projectsState === 'All Projects') {
      setProjectModal(true);
    }
  }, [projectsState]);

  useEffect(() => {
    if (gatewaysState === 'All Gateways') {
      setGatewayModal(true);
    }
  }, [gatewaysState]);

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
        let data = res.data.data;
        let formatReports = data.map(reportObj =>
          Object.fromEntries(
            Object.entries(reportObj).map(([k, v]) => [
              k,
              v.toString().toLowerCase(),
            ])
          )
        );
        setReports(formatReports);
        setFilteredReports(formatReports);
        setCurrentScreen('Report');
        setShowToast(true);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const openProjectModal = () => setProjectModal(true);
  const closeProjectModal = () => setProjectModal(false);

  const openGatewayModal = () => setGatewayModal(true);
  const closeGatewayModal = () => setGatewayModal(false);

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
        setReports,
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
        isProjectModal,
        setProjectModal,
        openProjectModal,
        closeProjectModal,
        isGatewayModal,
        setGatewayModal,
        openGatewayModal,
        closeGatewayModal,
        showToast,
        setShowToast,
        filteredReports,
        setFilteredReports,
        isFiltered,
        setIsFiltered,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
