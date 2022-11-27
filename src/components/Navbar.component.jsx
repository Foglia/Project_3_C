import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

// Context specifies 
function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
   {loggedIn &&  (
    <>
    <Link to="/events">
     <button>Events</button>
    </Link>
    <button onClick={logout}>Logout</button>
    <h3>Hello {user.email}!</h3>
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