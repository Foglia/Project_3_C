import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



function EventDetail() {
    const [event, setEvent] = useState ({})  //Mudar sempre o Use State para testas
    const {Name} = useParams();

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
    </div>
  )
}

export default EventDetail;