import React from 'react';
import axios from 'axios';
import { useState, useEffect }  from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.component';
import { AuthContext } from '../contexts/auth.context';
import 'boxicons';


//Token for every private page

function Events() {
  const {user} = useContext(AuthContext);
  const [events, setEvents] = useState([]); 
  const getFromBack = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');  
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`, { headers: { Authorization: `Bearer ${storedToken}`}
      });
      setEvents(response.data.sort(() => .5 - Math.random()).slice(0,20)) // Math Random inserted - seg
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
  getFromBack();
  },[]);

  return (
  <>
  <Navbar />  
    <div>
    <div className='HelloUser'>
    {user && (
    <h1>Olá, <h3>{user.firstName ? user.firstName : user.email}!</h3></h1>
    )}
    <p>Saiba mais sobre os eventos que estão a ocorrer em Portugal</p>
    </div>
    </div>
    <div className='HeadEvent'>
    {events.map((event) => {
    return (
  <div className='HeadHeader'>
     <div key={event.Name}>
     <div className="EventTitle">
     <h3>{event.Name}</h3>
     <p className='Location'><box-icon name="map" size="sm" color="red" animation="flashing">Onde?</box-icon> <b>{event.Location}</b></p>
    </div>
  </div>   
     <>
     <Link to={`/events/search/${event.Name}`}> 
     <img className='HeadImage' src={event.ImageUrl} />
     </Link>
    </>
    </div>
    )
    })}

    </div>
</>
  );
}

export default Events 