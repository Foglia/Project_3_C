import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import { StyledGreyButton } from '../components/Button. styled';
import background from "../images/ev2.jpg";


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
      console.log(error)
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
          <form onSubmit={handleLoginSubmit}>
          <h6 className='userGreet'>BEM-VINDO DE VOLTA!</h6>
          <p>Por favor, insira suas informações de login para acessar sua conta.</p>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={handleEmail} />
          <label>Password</label> 
          <input type="password" name="password" value={password} onChange={handlePassword} />
          <br/>
          <br/>
          <StyledGreyButton style={{ width: '200px' }} type="submit">LOGIN</StyledGreyButton>
       </form>
      </div>
       {errorMessage && <p className="error-message">{errorMessage}</p>}
       <p>Não tens um perfil?</p>
       <Link to={'/signup'} style={{ textDecoration: 'none', color: "black" }}><b>SIGNUP</b></Link>
    </div>
  </div>
</div>  
  );
}

export default Login;