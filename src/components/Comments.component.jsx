import { useState } from 'react';
import axios from 'axios';
import React from 'react';

function Comments(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/events/create-comment/:id'`, { title, description });

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
         {<button to= "/event/:id"  type="submit">Add comment</button>}
      </form>
    </div>
  );
}

export default Comments;


