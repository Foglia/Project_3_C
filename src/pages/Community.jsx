import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Comments from '../components/Comments.component'
import { Link } from "react-router-dom";



function Community() {
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


  
    const [event, setEvent] = useState ([])  //Mudar sempre o Use State para testas
    const {Name} = useParams();

    const getEvent = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/community`)
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
    <div className="Community">
     <Link to={"events/create-comment/"}>
     <button>Comment</button>
     </Link>
    
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