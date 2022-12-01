import React from 'react';
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
      const errorDescription = error.response.data.message; 
      setErrorMessage(errorDescription);  
    }
  };

  return (
  
      <div class="wrapper">
	<div class="lsContainer">
  <h1 class="LoginTitle">Login</h1>
      <form onSubmit={handleLoginSubmit}>
     <label>Email:</label>
      <input type="text" name="email" value={email} onChange={handleEmail} />
        <label>Password:</label> 
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <br/>
        <br/>
        <button type="submit">Login</button>
        </form>
      </div>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}
     
     
      <p class= "paragraph">Don't have an account yet?</p>
    
      <Link to={'/signup'}> Sign Up</Link>
    </div>
    
   
  );
}

			
	

export default Login;