import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      //try to create the user  
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { email, password }); //always use the process.env when trying to return a path inside your API
      //redirect
      navigate('/login');  
    } catch(error) {
      const errorDescription = error.response.data.message; //at the server folder we have already specified the error messages, they would be recalled here  
      setErrorMessage(errorDescription);  
    }
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={'/login'}> Login</Link>
    </div>
  );
}

export default Signup;