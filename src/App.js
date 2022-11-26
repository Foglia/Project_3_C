import './App.css';
import AddUserProfile from './components/AddUserProfile.component';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* import Comments from './components/Comments.component.jsx';
import EditUserProfile from './components/EditUserProfile.component.jsx';
import Navbar from './components/Navbar.component.jsx';
import Home from './pages/Home.page';
import Events from './pages/Events.page';
import EventDetail from './pages/EventDetail.page';
import Login from './pages/Login.page';
import Signup from '.pages/Signup.page';
import UserProfile from './pages/UserProfile.page' */


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profile" element={<AddUserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
