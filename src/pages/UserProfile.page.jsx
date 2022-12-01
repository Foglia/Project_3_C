import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'; //Need to map 
import { useParams, useNavigate } from 'react-router-dom'; //to return DB params
import Navbar from '../components/Navbar.component';
import { AuthContext } from '../contexts/auth.context';


function UserProfile() {
const [user, setUser] = useState(null)
const {id} = useParams();
const {eventId} = useParams();
const navigate = useNavigate();
const { logout } = useContext(AuthContext);



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
    logout();
    navigate("/")
  } catch(error) {
     console.log(error)
  }
};


  return (
    <>
    <Navbar />
    <div className="UserProfile">
    {user && (
    <>
    <div className='ImgeName'>
    <img className="UserImg" src={user.imageUrl} alt="imagem pessoal"/>
    <h4 className='Name'>{user.firstName}  {user.lastName}</h4>
    </div>
    <div className='UserInfo'> 
    <p>{user.location}</p>
    <p>Género: {user.gender}</p>
    <p>Sobre {user.firstName}: {user.aboutMe}</p>
    </div>
    </>
    )}
    
    <div className="ProfileContainer">  
    <h3>EVENTOS</h3>   
    <div className="Row">
    <div className='Column'>
    <h3>SALVOS</h3>
      {user && user.favorite.map((fav) => {
        return (
        <div key={fav._id}>
        <h6>{fav.title}</h6>
        <img className="FavImage" src={fav.imageUrl} />
    </div>   
        )}
      )}
    </div>
    <div className='Column'>
    <h3>VAI A ...</h3>
      {user && user.atendeeEvent.map((att) => {
        return (
        <div className="Profile" key={att._id}>
        {/* <Link to={`/community2/${id}`}> */}
        <h6>{att.title}</h6>
        <img className="AttImage" src={att.imageUrl} />
        {/* </Link> */}
        </div>
        )}
      )}
    </div>
    </div>
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
</>
)
}


export default UserProfile;