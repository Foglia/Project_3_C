import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Comments from '../components/Comments.component'
import { Link, useNavigate } from "react-router-dom";




 /* const [users, setUsers] = useState();
  const {_id} = useParams();
  const getUsers = async () => {
  try {
    const storedToken = localStorage.getItem('authToken');  
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, { headers: { Authorization: `Bearer ${storedToken}` }, 
  }); 
    setUsers(response.data);
    console.log(response.data);
  } catch(error) {
    console.log(error);
  } useEffect (() => {
    getUsers();
  }, [])
  }  */ 
  
  /*   const [event, setEvent] = useState ([])  */ //Mudar sempre o Use State para testas
  function Community() {
  const [event, setEvent] = useState(null)
  const {id} = useParams();

    const showComments = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/community/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}});
        setEvent(response.data) 
        console.log(response.data)
       /*  navigate("/events/comment/");  */  
      } catch (error) {
   
      }
    }
    useEffect (() => {
      showComments();
      
      }, [])
     
      

  return (
    <div className="Community">
      {/* {event && event.attendance.map((commentShow)=>{ */}
      {event && event.comments.map((commentShow)=>{
        return (
          <div key={commentShow._id}>
            <p>{commentShow._id[5]}</p>
            </div>
        )
      })} 
      <div>
{/*         {event && event.map(())} */}
      </div>
      {/* <h1>{comment.title}</h1> */}

     <Comments/> {/* = {showComments}/> */}


    
       {/* {users.map((user) => { */}
      {/*   return ( */}
           <div>
          {/*   <h3>{user._id}</h3> */}

            

            
            
            </div>    
      {/* ) */}
    {/* })} */}
    </div>
  );
}

export default Community;