import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

//Create the context
const AuthContext = createContext()

//Create the wrapper
function AuthProviderWrapper(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const storeToken = (token) => {
        localStorage.setItem("authToken", token); //takes the name and the actual value
    };
// func to autenticate the user
const authenticateUser = async () => {
    try {
        const storedToken = localStorage.getItem('authToken')

    if(storedToken){
       const response = await axios.get(`${process.env.REACT_APP_API_URL}/verify`,  { //VERIFY IS A PRIVATE ROUTE, SO we must pass and object with the headers
       headers: { Authorization: `Bearer ${storedToken}` },  
    }); 

    // The next part happens if the loggin was succesfull    
      setLoggedIn(true);
      setUser(response.data);
      setLoading(false);
    } else {
      setLoggedIn(false);  
      setUser(null);
      setLoading(false);
}
    } catch(error) {
    // if there's an error we don't want the user loggedIn    
      setLoggedIn(false);  
      setUser(null);
      setLoading(false);
   }
};

//In this function we mantain the user logged in even after a refresh, in a page, everytime a page is reload we loose the sesion,
//to prevent this we need to declare it inn the useEffetc (linked with the token propertties)
useEffect(() => {
    authenticateUser();
}, [])

const logout = () => {
    //first, we remove the token from the local storage
    localStorage.removeItem('authToken')
    //we run authenticate again to reset the state
    //login inverse logic
    authenticateUser();
}   

  return (
    <AuthContext.Provider value={{ loggedIn, user, loading, storeToken, authenticateUser, logout }}>
    {props.children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProviderWrapper}