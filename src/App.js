import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import SignInPage from './SignInPage';
import ControllerPage from './ControllerPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/controller" element={<ControllerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;