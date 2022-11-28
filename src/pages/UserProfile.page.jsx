import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; //Need to map 
import { useParams } from 'react-router-dom'; //to return DB params

function UserProfile() {
const [user, setUser] = useState()
const {id} = useParams();

const getUser = async() => {
  try {
    const storedToken = localStorage.getItem('authToken');  
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}`} 
    });
    setUser(response.data);
    console.log(response.data)
  } catch(error) {
    console.log(error);  
  };
 }
    useEffect(() => {
    getUser();
  }, []);  

  return (
    <div className="UserProfile">
    {user && (
    <>
    <h3>UserProfile</h3>
    <p>{user.email}</p>
    <img src={user.imageUrl} alt="personal photo"/>
    <p>{user.firstName}</p>
    <p>{user.lastName}</p>
    <p>{user.gender}</p>
    <p>{user.location}</p>
    <p>{user.aboutMe}</p>
    </>
    
    )}
    {user && (
    <>   
    <Link to={`/edit-profile/${id}`}>
    <button type="submit">Edit Profile</button>
    </Link>
    </>
    )}
    </div>
  )
}

export default UserProfile