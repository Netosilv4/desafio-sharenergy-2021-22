import React, { useContext } from 'react';
import { Login } from './pages/login';
import './globalStyles.css';
import { UserContext } from './context/UserContext';
import Dashboard from './pages/dashboard';
import { PlantInfoProvider } from './context/PlantInfoContext';

const App: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Login />;
  }

  return (
    <PlantInfoProvider>
      <Dashboard />
    </PlantInfoProvider>
  );
};

export default App;
