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
     <button>EVENTOS</button>
    </Link>
    <button onClick={logout}>LOGOUT</button>
    </>
  )}

  {!loggedIn && (
    <>
    <Link to="/signup">
    <button>SIGNUP</button>
    </Link>
    <Link to="/login">
    <button>LOGIN</button>
    </Link>
    </>
  )}
</EventsCarousel>

)
}


export default Home