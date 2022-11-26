import { useState } from 'react';
import axios from 'axios';
import React from 'react';

function AddUserProfile(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [loading, setLoading] = useState(false);


  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAboutMe = (e) => setAboutMe(e.target.value);

  const handleUpload = async (e) => {
    try {
      setLoading(true);
      const uploadData = new FormData();
      uploadData.append('image', e.target.files[0]);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, uploadData);

      console.log(response.data.imageUrl);
     /*  setImage(response.data.imageUrl); */
      setLoading(false)
      ;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/profile/create`, {
        firstName,
        lastName,
        imageUrl,
        gender, 
        location,
        aboutMe,
        loading, 
      });

      setFirstName('');
      lastName('');
      imageUrl('');
      gender('');
      location('');
      aboutMe('');
      

      //refresh the list
      props.refreshAddUserProfileUser();
    } catch (error) {
      console.log(error);
    }
  };

return (
    <div className="AddUserProfile">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
        <label htmlFor="FirstName">Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
        <label htmlFor="title">Gender</label>
        <input type="text" name="firstName" value={gender} onChange={handleGender} />


       <textarea
          name="description"
          value={aboutMe}
          cols="30"
          rows="10"
          onChange={handleAboutMe}
        ></textarea> 

        <label htmlFor="image">Project Image</label>
        <input type="file" name="image" onChange={handleUpload} />

        {loading ? <p>Loading...</p> : <button to="/profile/:id" type="submit">Add Profile</button>}
      </form>
    </div>
  );
}

export default AddUserProfile;

