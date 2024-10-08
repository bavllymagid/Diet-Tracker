// App.jsx
import React from 'react';
import DietTracker from './components/DietTracker';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import HistoryPage from './components/HistoryPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DietTracker />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};
export default App;

