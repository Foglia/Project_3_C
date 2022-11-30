import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import AddUserProfile from './components/AddUserProfile.component';
import EditUserProfile from './components/EditUserProfile.component';
import EventDetail from './pages/EventDetail.page';
import Navbar from './components/Navbar.component';
import Home from './pages/Home.page';
import Events from './pages/Events.page';
import Login from './pages/Login.page';
import Signup from './pages/Signup.page';
import UserProfile from './pages/UserProfile.page'
import Community from './pages/Community';
import Anon from './components/Anon.component';
import Private from './components/Private.component';
import Comments from './components/Comments.component';


function App() {
  return (
    <div className="App">
      {/* How to hide the Navbar?  */}
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path='/signup' element={
          <Anon>
            <Signup />
          </Anon>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/:id' element={<UserProfile />} />
        <Route path='/events/create-comment/:id' element={<Comments />} />
        <Route path='/events/delete-comment/:id' element={<Comments />} />
        <Route path='/events/comment/:id' element={<Comments />} />

        <Route path='/edit-profile/:id' element={
          <Private>
            <EditUserProfile />
          </Private>
        } />
        <Route path='/events' element={<Events />} />
        <Route path='/community/:id' element={<Community />} />
        <Route path='/events/search/:Name' element={<EventDetail />} />


      </Routes>
    </div>
  );
}

export default App;

