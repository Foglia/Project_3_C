import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function Comments(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams()
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const storedToken = localStorage.getItem('authToken') 
      await axios.post(`${process.env.REACT_APP_API_URL}/events/${id}/create-comment`, { title, description }, { headers: { Authorization: `Bearer ${storedToken}`}});
      setTitle('');
      setDescription(''); 
 

      props.refreshComments();
   
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
    <div className="AddComment">
      <form class="CommentForm" onSubmit={handleSubmit}>
        <textarea
          name="description"
          value={description}
          cols="60"
          rows="10"
          onChange={handleDescription}
          placeholder="Esta exposição era incrível. Só faltava (...)"
          ></textarea>
          <br/>
         <button class= "submitComment" type="submit">Comentar</button>
      </form>
    </div>
  );
}

export default Comments;




