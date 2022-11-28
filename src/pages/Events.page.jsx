import React from 'react';
import axios from 'axios';
import { useState, useEffect }  from 'react';

function Events() {
  console.log('Events')  
  const [events, setEvents] = useState([]);  
  const getFromApi = async () => {
    try {
      const response =  axios.get(`${process.env.REACT_APP_API_URL}/events`)
      // const response = await axios.get('http://culturaportugal.gov.pt/umbraco/api/eventsapi/GetEvents');
      setEvents(response.data);
    } catch(error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
  getFromApi();
  },[]);


  // Fazer MAP PARA RETORNAR EVENTOS ///
  return (
    <div className='HeadEvent'>
    <h1>Events</h1>   
    <div>  
     <div className='Events'>
     <h3>{events.title}</h3>
     <img src={events.ImageUrl} alt="event poster" />
    </div>
    </div>
    </div>
  );
}

export default Events 