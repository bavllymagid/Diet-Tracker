// App.jsx
import React from 'react';
import DietTracker from './components/DietTracker';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (   
    <div>
      <DietTracker />
      <ToastContainer />
    </div>
  );
};
export default App;

