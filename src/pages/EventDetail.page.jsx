import React from 'react';
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import Community from './Community';




function EventDetail() {
    const [event, setEvent] = useState ({})  //Mudar sempre o Use State para testas
    const {Name} = useParams();
   const navigate = useNavigate();

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

    // this will create event ID 
    const createEvent = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/event-search?Name=${Name}`, null,
         { headers: { Authorization: `Bearer ${storedToken}` } // sempre 3 arg num post e put  
   })
        const event = response.data
        return event;
      } catch (error) {
        console.log(error)
      }
    }

  // this will call route to favs 
  // needs to call the create event

    const addFavourite = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const event = await createEvent()
        await axios.put(`${process.env.REACT_APP_API_URL}/events/favorite/${event._id}`, null, { headers: { Authorization: `Bearer ${storedToken}`}})
        navigate(`/community/${event._id}`) 
      } catch (error) {
        console.log(error)
      }
    }

    const addAttendance = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const event = await createEvent()
        await axios.put(`${process.env.REACT_APP_API_URL}/events/attend/${event._id}`, null, { headers: { Authorization: `Bearer ${storedToken}`}})
        navigate(`/community/${event._id}`) 
      } catch (error) {
        console.log(error)
      }
    }
   
return (
    <div className= "EventDetails">
          <h1>{event.Name}</h1> 
     < img src= {event.ImageUrl} />
  
     <button onClick={addAttendance}>Atendance</button>
  


     <button onClick={addFavourite}> Favourite </button> {/* botao funcional */}
    </div>
  )
}

export default EventDetail;