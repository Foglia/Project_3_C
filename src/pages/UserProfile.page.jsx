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
    <img src={user.imageUrl} alt="personal photo"/>
    <p>Nome: {user.firstName}</p>
    <p>Apelido: {user.lastName}</p>
    <p>Género: {user.gender}</p>
    <p>Cidade: {user.location}</p>
    <p>Sobre {user.email}: {user.aboutMe}</p>
    </>
    )}

    {user && (
    <>
    <Link to={`/edit-profile/${user._id}`}>
     <button>Edit your Profile</button>
    </Link>
    </>
    )}
{/* 
    {user.favorite.map((favs) => (    
    <li className="Favs" key={id}>
      <h3>{[user.favs]}</h3>
    </li>
    ))
    }

    {user.atendeeEvent.map((atendee) => (   
    <li className="Antendee" key={atendee._id}>
        <h3>Eventos</h3>
        <h3>{[user.atendee]}</h3>
    </li>
    ))
    } */}

    </div>
  )
}

export default UserProfile