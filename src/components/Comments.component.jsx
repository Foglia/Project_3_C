import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Comments(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams()
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { //passar rota authentication
      const storedToken = localStorage.getItem('authToken') 
      await axios.post(`${process.env.REACT_APP_API_URL}/events/${id}/create-comment`, { title, description }, { headers: { Authorization: `Bearer ${storedToken}`}});
// call comment in the community 
      await axios.get(`${process.env.REACT_APP_API_URL}/comment/${id}/create-comment`, { title, description }, { headers: { Authorization: `Bearer ${storedToken}`}});

      setTitle('');
      setDescription(''); 
 
      
      props.refreshComments();
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddComment">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label htmlFor="description">Comment</label>
        <textarea
          name="description"
          value={description}
          cols="30"
          rows="10"
          onChange={handleDescription}
        ></textarea>
         <button type="submit">Add comment</button>
      </form>
    </div>
  );
}

export default Comments;


