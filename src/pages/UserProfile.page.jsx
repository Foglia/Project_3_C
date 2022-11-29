import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; //Need to map 
import { useParams } from 'react-router-dom'; //to return DB params
// import Favorite from '../components/Favorite';

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
    <img src={user.imageUrl} alt="personal photo"/>
    <p>Nome: {user.firstName}</p>
    <p>Apelido: {user.lastName}</p>
    <p>Género: {user.gender}</p>
    <p>Cidade: {user.location}</p>
    <p>Sobre {user.email}: {user.aboutMe}</p>
    </>
    )}
{/* 
    <div className='Favorite'>
    <Favorite />
    </div> */}

    {user && (
    <>
    <Link to={`/edit-profile/${user._id}`}>
     <button>Edit your Profile</button>
    </Link>
    </>
    )}
</div>
)
}


export default UserProfile;