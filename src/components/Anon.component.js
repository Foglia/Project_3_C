import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom'

function Anon(props) {
   const {loading, loggedIn} = useContext(AuthContext); 
   if (loading) return <img src='../../public/loading1.gif'/> 
   // if user is not loggedin, return to log inn
   if (!loggedIn) {
   return props.children
   // if the user is loggedin, return the children (the protected page)
   } else {
   return <Navigate to="/" />
   } 
}

export default Anon