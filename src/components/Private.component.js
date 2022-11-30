import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom'


function Private(props) {
    const {loading, loggedIn} = useContext(AuthContext);
    if(loading) return <img src='../../public/loading1.gif'/>
    if(!loggedIn) {
    return <Navigate to='/login' />
    } else {
    return props.children;    
    }
}

export default Private