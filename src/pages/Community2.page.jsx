import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import Comments from '../components/Comments.component'
// import Comments from '../components/Comments.component'
// import Events from './Events.page'
// import { useNavigate } from "react-router-dom";

function Community2() {
    const [event, setEvent] = useState(null)
    const {id} = useParams();
    // const userId = useParams();

const getEvent = async() => {
    try {
    const storedToken = localStorage.getItem('authToken') 
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/${id}`, { headers: { Authorization: `Bearer ${storedToken}`} 
    });
     setEvent(response.data);
     console.log(response.data);
     } catch(error) {
     console.log(error);  
     };
    }
    useEffect(() => {
    getEvent();
    }, []);  

const showComments = async () => {
        try {
          const storedToken = localStorage.getItem('authToken') 
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/community/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}});
          showComments(response.data) 
          console.log(response.data)
         /*  navigate("/events/comment/");  */  
        } catch (error) {
          console.log(error)
        }
      }
      useEffect (() => {
    showComments();
        
        }, [])

  return (
  <div className="Community2">
  {event && 
      <div key={event.id}>
      <img src={event.imageUrl}/>
      <p>{event.title}</p>
      <p>{event.location}</p>
      <p>{event.link}</p>
  </div>
    }
   <>
    <Comments />
   </>

   <div>
    <h3>Comments</h3>
      {event && event.comments.map((comm) => {
        return (
        <div key={comm._id}>
        <h6>{comm.user}</h6>
        </div>
        )}
      )}
    </div>

   <div>
    <h3>Attendance</h3>
      {event && event.attendance.map((att) => {
        return (
        <div key={att._id}>
        <img src={att.imageUrl} />
        <h6>{att.firstName}</h6>
        </div>
        )}
      )}
    </div>

    </div>
  );
}

export default Community2;