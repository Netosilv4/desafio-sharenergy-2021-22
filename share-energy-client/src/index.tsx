import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import { ComponentsProvider } from './context/ComponentsContext';

import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ComponentsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ComponentsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
