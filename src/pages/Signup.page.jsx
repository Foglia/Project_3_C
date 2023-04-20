import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from "../images/ev2.jpg";
import { StyledGreyButton } from '../components/Button. styled';

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
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { email, password }); 
      navigate('/login');  
    } catch(error) {
      const errorDescription = error.response.data.message; 
      setErrorMessage(errorDescription);  
    }
  };

  return (
<div style={{ backgroundImage: `url(${background})`,
backgroundRepeat: 'no-repeat',
maxHeight: '100vh',
alignContent: 'left',
height: '100vh',
objectFit: 'cover',
}}>
<div className='loginBody'>
  <div className="main">
    <div className="lsContainer">
     <form onSubmit={handleSignupSubmit}>
       <h6 className='userGreet'>UNE-TE AO MONTRA!</h6>
       <p>Registe-se agora para criar uma conta.</p>
       <label className="labelHead">Email</label>
       <input type="text" name="email" value={email} onChange={handleEmail} />
       <label className="labelHead">Password</label> 
       <input type="password" name="password" value={password} onChange={handlePassword} />
        <br/>
        <br/>
      <StyledGreyButton style={{ width: '200px' }} type="submit">SIGNUP</StyledGreyButton>
     </form>
  </div>
  {errorMessage && <p className="error-message">{errorMessage}</p>}
  <p>Já tens uma conta?</p>
  <Link to={'/login'} style={{ textDecoration: 'none', color: "black" }}><b>LOG IN</b></Link>
</div>
</div>
</div>  
  );
}

export default Signup;