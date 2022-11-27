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
  const handleGender = (e) => setGender(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAboutMe = (e) => setAboutMe(e.target.value);

  const handleUpload = async (e) => {
    try {
      setLoading(true);
      const uploadData = new FormData();
      uploadData.append('ImageUrl', e.target.files[0]);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, uploadData);

      console.log(response.data.imageUrl);
     setImageUrl(response.data.imageUrl);
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
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" value={gender} onChange={handleGender} />
        <label htmlFor="location">Location</label>
        <input type="text" name="location" value={location} onChange={handleLocation} />
        <textarea
          name="aboutMe"
          value={aboutMe}
          cols="30"
          rows="10"
        ></textarea> 
        <label htmlFor="imageUrl">User Image</label>
        <input type="file" name="imageUrl" value={imageUrl} onChange={handleImageUrl} />
        </form>
        {loading ? <p>Loading...</p> : <button to="/profile/:id" type="submit">Add Profile</button>}
    </div>
  );
}

export default AddUserProfile;

