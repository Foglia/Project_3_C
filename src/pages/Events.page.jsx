import React from 'react';
import axios from 'axios';
import { useState, useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom'

//Token for every private page

function Events() {
  const {id} = useParams()
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
    <div className='HeadEvent'>
    {events.map((event) => {
    return (
     <div key={event.Name}>
     <h1>{event.Name}</h1>
     <p><b>{event.Location}</b></p>
     <>
     <Link to={`/events/search/${event.Name}`}> 
     <img src={event.ImageUrl} />
     </Link>
    </>
    </div>
    )
    })}

    </div>

    

  );
}

export default Events 