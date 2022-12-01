import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import Comments from '../components/Comments.component'
import Navbar from '../components/Navbar.component';

  function Community() {
  const [event, setEvent] = useState(null)
  const {id} = useParams();

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
        setEvent(response.data) 
        console.log(response.data)

      } catch (error) {
       console.log(error)
      }
    }
    useEffect (() => {
    showComments();  
      }, [])



    const deleteComments = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/community/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}});
        setEvent(response.data) 
        console.log(response.data)

      } catch (error) {
   
      }
    }
    useEffect (() => {
    deleteComments();  
      }, [])


      return (
        <>
        <Navbar />
        <div className="Community2">
        {event && 
            <div key={event.id}>
            <img className="CommImg" src={event.imageUrl}/>
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
              <p>{comm.title}</p>
            <p>{comm.description}</p>
            <button onClick={deleteComments}>Delete Comment</button> 
              </div>
              )}
            )}
          </div>
      
         <div className="CommAtend">
          <h3>Attendance</h3>
            {event && event.attendance.map((att) => {
              return (
              <div key={att._id}>
              <img className="UserImg" src={att.imageUrl} />
              <Link to={`/profile/${att._id}`}>
              <h6>{att.firstName}</h6>
                </Link>
              </div>
              )}
            )}
          </div>
          </div>
          </>
        );
      }

export default Community;