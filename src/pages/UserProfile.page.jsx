import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; //Need to map 
import { useParams } from 'react-router-dom'; //to return DB params

function UserProfile() {
const [user, setUser] = useState(null)
const {id} = useParams();
const {eventId} = useParams();

const getUser = async() => {
  try {
    const storedToken = localStorage.getItem('authToken');  
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}`} 
    });
    setUser(response.data);
    console.log(response.data);
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

    <div>
    <h3>Favorites</h3>
      {user && user.favorite.map((fav) => {
        return (
        <div key={fav._id}>
        <h3>{fav.title}</h3>
        <img href={fav.imageUrl} />
        </div>
        )}
      )}
    </div>

    <div>
    <h3>Attendance</h3>
      {user && user.atendeeEvent.map((att) => {
        return (
        <div key={att._id}>
        <Link to={`/events/${eventId}`}>
        <img src={att.imageUrl} />
        <h6>{att.title}</h6>
        </Link>
        </div>
        )}
      )}
    </div>

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