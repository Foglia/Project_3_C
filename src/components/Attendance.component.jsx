import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Attendance() {
  const [oneEvent, setOneEvent] = useState(null);

  const getFromApi = async () => {
    try {
      const apiCall = await axios.post(`${process.env.REACT_APP_API_URL}/events`
      );
      setOneEvent(apiCall.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi()
   }, []);

  return (
    <div>
    <button type='submit'>Comparecer ao Evento</button>
    </div>
  )
}

export default Attendance