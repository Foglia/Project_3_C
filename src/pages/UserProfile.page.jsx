import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'; //Need to map 
import { useParams, useNavigate } from 'react-router-dom'; //to return DB params
import Navbar from '../components/Navbar.component';
import { AuthContext } from '../contexts/auth.context';
import { StyledButton } from "../components/Button. styled"

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
    <div className='profHeader'>
    <div className='ImgeName'>
    <img className="UserImg" src={user.imageUrl} alt="imagem pessoal"/>
    <h4 className='Name'>{user.firstName}  {user.lastName}</h4>
    <p><box-icon name="map" size="xs" color="red"></box-icon> {user.location}</p>
    </div>
    <div className='UserInfo'> 
    <p><b>Género: </b>{user.gender}</p>
    <p><b><i>{user.aboutMe}</i></b></p>
    </div>
    </div>
    </>
    )}
    
    <div className="ProfileContainer">  
    <h3 className='pTitle'>EVENTOS</h3>   
    <div className="Row">
    <div className='Column'>
    <h3 className='pTitle'>SALVOS</h3>
      {user && user.favorite.map((fav) => {
        return (
        <div key={fav._id}>
        <div className="smallBox">
        <p><box-icon name="heart-circle" size="sm" color="red"></box-icon>   {fav.title}</p>
        <img className="FavImage" src={fav.imageUrl} />
        </div>
    </div>   
        )}
      )}
    </div>
    <div className='Column'>
    <h3 className='pTitle'>VAI A ...</h3>
      {user && user.atendeeEvent.map((att) => {
        return (
        <div className="Profile" key={att._id}>
        <div className="smallBox">
        <p className="pSmallTitle">{att.title}</p>
        <img className="AttImage" src={att.imageUrl} />
        </div>
        </div>
        )}
      )}
    </div>
    </div>
    </div>
<div className='clickEvent'>
<div className='bAlign'>
    {user && (
    <>
    <Link className='linkB' to={`/edit-profile/${user._id}`}>
     <StyledButton className="columnB">EDITAR PERFIL</StyledButton>
    </Link>
    
    <StyledButton className="columnB" onClick={deleteProfile}>DELETAR PERFIL</StyledButton>
    </>
    )}
</div>
</div>
</div>
</>
)
}


export default UserProfile;