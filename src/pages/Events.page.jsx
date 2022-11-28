import React from 'react';
import axios from 'axios';
import { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

//Token for every private page

function Events() {
  console.log('events')
  const [events, setEvents] = useState([]); 
  const getFromBack = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
      setEvents(response.data.slice(0, 20));
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
     <p>{event.Name}</p>
     <>
     <Link to={`/events/search/${event.Name}`}>
     <img src={event.ImageUrl} />
     </Link>
     <p>{event.Location}</p>
    </>
    </div>
    )
    })}
    </div>
  );
}

export default Events 