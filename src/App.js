import './App.css';
import { Routes, Route} from 'react-router-dom'
// import AddUserProfile from './components/AddUserProfile.component';
// import Comments from './components/Comments.component.jsx';
import UserProfile from './pages/UserProfile';
import EditUserProfile from './pages/EditUserProfile';
import Navbar from './components/Navbar.component.jsx';
import Home from './pages/Home.page';
import Events from './pages/Events.page';
import Signup from './pages/Signup.page';
import Login from './pages/Login.page';
import Private from './components/Private.component';
import Anon from './components/Anon.component';
// import EventDetail from './pages/EventDetail.page';
// import Login from './pages/Login.page';
// import Signup from '.pages/Signup.page';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={
          <Anon>
            <Signup />
          </Anon>
        } />
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<UserProfile />}/>
        <Route path='/edit-profile' element={
          <Private>
            <EditUserProfile />
          </Private>
        } />
      <Route path='/events' element={<Events />} />
    </Routes>
    </div>
  );
}

export default App;
