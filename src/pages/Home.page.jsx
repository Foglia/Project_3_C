import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventsCarousel from '../components/EventsCarousel';

function Home() {
const { loggedIn, user, logout } = useContext(AuthContext);
const {id} = useParams();

return (

<EventsCarousel>
  {loggedIn &&  (
    <>
    <Link to="/events">
     <button>Events</button>
    </Link>
    <button onClick={logout}>Logout</button>
    </>
  )}

  {!loggedIn && (
    <>
    <Link to="/signup">
    <button>Signup</button>
    </Link>
    <Link to="/login">
    <button>Login</button>
    </Link>
    </>
  )}
</EventsCarousel>

)
}


export default Home