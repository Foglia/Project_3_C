import axios from 'axios';
import { useState, useEffect }  from 'react';

const API_URL = "http://localhost:5005";


function Events() {
  const [events, setEvents] = useState([null]);  
  const getFromApi = async () => {
    try {
      const get =  axios.get(`${API_URL}/api/events`)
      const response = await axios.get('https://dados.gov.pt/pt/datasets/r/588d5c20-0851-4c34-b5da-dcb1239e7bca');
      setEvents('events', response.data);
    } catch(error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
  getFromApi();
  },[]);

  return (
    <div className='HeadEvent'>
      <h1>Events Gallery</h1>   
   <div>
    {events.map((event) => {
        return (
   <div className='Events'>
     <img src={events.ImageUrl} alt="event poster" />
    </div>
    )
})}
    </div>
    </div>
  );
}

export default Events 