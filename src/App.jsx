import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen  from './components/WelcomeScreen';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/create-account" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;