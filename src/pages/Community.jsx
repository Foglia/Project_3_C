import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


function Community() {
  const [users, setUsers] = useState();
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
  }
useEffect(() => {
    getUsers();
  }, [])
  }
  return (
    <div>
       {users.map((user) => {
        return (
           <div>
            <h3>{user._id}</h3>
            </div>    
      )
    })}
    </div>
  );
}

export default Community