import React from 'react';
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
// import Community from './Community';
// import Attendance from '../components/Attendance';



function EventDetail() {
    const [event, setEvent] = useState ({})  //Mudar sempre o Use State para testas
    const {Name} = useParams();
    const {id} = useParams();

    const getEvent = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/event-search?Name=${Name}`)
    setEvent(response.data)
    console.log(response.data)
    } catch(error) {
    console.log(error)
    }
  }
    useEffect (() => {
    getEvent()
    }, [])

return (
    <div className= "EventDetails">
          <h1>{event.Name}</h1> 
          <img src= {event.ImageUrl} />
     <Link to={`/src/pages/community/${id}`}>
     {/* <Link to={"/events/create-comment/:id"}> */}
     <button>Atendance</button>
     {/* </Link> */}
     </Link>
     {/* <Attendance /> */}
     <Link to={`events/favorite/${id}`}>
     <button>Favourite</button>
     </Link>
    </div>
  )
}

export default EventDetail;