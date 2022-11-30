import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Home() {
const { loggedIn, user, logout } = useContext(AuthContext);
const {id} = useParams();

return (
    <div>
    <h1>LXml</h1>
    <h4>Conheça os melhores eventos perto de si e descubra quem vai estar por lá...</h4>

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
    </div>
)
}

export default Home