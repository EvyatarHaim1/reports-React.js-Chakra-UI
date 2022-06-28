import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

serviceWorker.unregister();

reportWebVitals();
