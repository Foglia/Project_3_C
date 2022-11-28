import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext); //recall the storeToken from context

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      //try to create the user  
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password }); //always use the process.env when trying to return a path inside your API
      
      //store the token that we get from the login request
      storeToken(response.data.authToken);  

      //validate the token
      authenticateUser();
      
      //redirect
      navigate('/events');  
    } catch(error) {
      const errorDescription = error.response.data.message; //at the server folder we have already specified the error messages, they would be recalled here  
      setErrorMessage(errorDescription);  
    }
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={'/signup'}> Sign Up</Link>
    </div>
  );
}

export default Login;