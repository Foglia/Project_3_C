import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



function EventDetail() {
    const [event, setEvent] = useState ([])
    const {id} = useParams();

    const getEvent = async () => {
        try {
/* const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/search/${Name}`) */
 const response = await axios.get('http://culturaportugal.gov.pt/umbraco/api/eventsapi/GetEvents');

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
     {event && (
        <>
<h1> {event.title}</h1>
<p>{event.Location}</p>
        </>
     )}
{/*      {project && project.tasks.map((task) => (
        <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
        </li> */}

    </div>
  )
}

export default EventDetail;