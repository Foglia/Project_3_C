import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; //Need to map 
import { useParams, useNavigate } from 'react-router-dom'; //to return DB params

function UserProfile() {
const [user, setUser] = useState(null)
const {id} = useParams();
const {eventId} = useParams();
const navigate = useNavigate();


const storedToken = localStorage.getItem('authToken');  

const getUser = async() => {
  try {
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

  const deleteProfile = async () => {
    try {
     await axios.delete(`${process.env.REACT_APP_API_URL}/delete-profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}
    });
    navigate("/")
  } catch(error) {
     console.log(error)
  }
};


  return (
    <div className="UserProfile">
    {user && (
    <>
    <img src={user.imageUrl} alt="personal photo"/>
    <p>Nome: {user.firstName}</p>
    <p>Apelido: {user.lastName}</p>
    <p>Género: {user.gender}</p>
    <p>Cidade: {user.location}</p>
    <p>Sobre {user.firstName}: {user.aboutMe}</p>
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
        <Link to={`/community/${id}`}>
        <img class="imgEvent" src={att.imageUrl} />
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
    <button onClick={deleteProfile}>Delete Profile</button>
    </>
    )}
</div>
)
}


export default UserProfile;