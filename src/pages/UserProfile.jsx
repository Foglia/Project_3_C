import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function UserProfile() {
const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <div>
    <h1>UserProfile</h1>
    <h2>{user._id}</h2>
    </div>
  )
}

export default UserProfile