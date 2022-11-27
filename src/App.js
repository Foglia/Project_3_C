import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUserProfile from './components/AddUserProfile.component';
import EditUserProfile from './components/EditUserProfile.component';
import EventDetail from './pages/EventDetail.page';


/*
import Comments from './components/Comments.component.jsx';
import Navbar from './components/Navbar.component.jsx';
import Home from './pages/Home.page';
import Events from './pages/Events.page';
import Login from './pages/Login.page';
import Signup from '.pages/Signup.page';
import UserProfile from './pages/UserProfile.page' */


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profile" element={<AddUserProfile />} />
        <Route path="/edit-profile" element={<EditUserProfile />} />
        <Route path="/events/search" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;
