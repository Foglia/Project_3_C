import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

// Context specifies 
function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const {_id} = useParams();

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
     </Link>
 
  {loggedIn && (
    <>
    <Link to="/events">
     <button>Events</button>
    </Link>
    <Link to={`/profile/${user._id}`}>
     <button>Your Profile</button>
    </Link>
    <button onClick={logout}>Logout</button>
    <h3>Olá <Link to={`/profile/${user._id}`}>{user.email}!</Link></h3>
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
  </nav>
)
}
 
export default Navbar;