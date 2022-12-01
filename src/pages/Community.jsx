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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}});
        setEvent(response.data) 
        console.log(response.data)

      } catch (error) {
       console.log(error)
      }
    }
    useEffect (() => {
    showComments();  
      }, [])



      const deleteComment = async (id) => {
        try {
          const storedToken = localStorage.getItem('authToken') 
          await axios.delete(`${process.env.REACT_APP_API_URL}/events/${id}/delete-comment`, { headers: { Authorization: `Bearer ${storedToken}`}});
          showComments();
        } catch (error) {
          console.log(error)
          
        }
      }


      return (
        <>
        <Navbar />
        <div className="Community2">
        {event && 
            <div key={event.id}>
            <img class="CommunityImg" src={event.imageUrl}/>
            <p class="maiusculas">{event.title}</p>
            <h6>{event.location}</h6>
        </div>
          }
         <>
<Comments refreshComments = {showComments}/>
        </>
         <div>
          <h4 class="commentsTitle">Comentários</h4>
          {event && event.comments.map((comm) => {
              return (
                <div class="card">
  <div class="container">
              <div key={comm._id}>
                
              <h6>{comm.user}</h6>
              <p>{comm.title}</p>
            <p>{comm.description}</p>
            <button class="deleteComment" onClick={()=> deleteComment(comm._id)}>Apagar Comentário</button> 
              </div>
              </div>
              </div>

             
              )}
            )}
            <hr class="solid"></hr>
          </div>
         <div>
          <h4 class="attendanceTitle">Attendance</h4>
            {event && event.attendance.map((att) => {
              return (
              <div key={att._id}>
              <img className="CommAtend" src={att.imageUrl} /> 
              <h6 class="AttendanceFirstName">{att.firstName}</h6>
              </div>
              )}
            )}
          </div>
          </div>
          </>
        );
      }
     
export default Community;







