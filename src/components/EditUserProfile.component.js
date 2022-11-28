import React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"

function EditUserProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('');

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleAboutMe = (e) => setAboutMe(e.target.value);
    const handleImageUrl = (e) => setAboutMe(e.target.value);

    const handleUpload = async (e) => {
    try {
      // setLoading(true);
      setImageUrl(e.target.files[0])
      const formData = new FormData()
      formData.append('imageUrl', );

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload/${id}`, formData);
      setImageUrl(response.data.imageUrl); 
      setLoading(false)
      ;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const {id} = useParams()
  const navigate = useNavigate()

  const getProfile = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`)

    setFirstName(response.data.firstName)
    setLastName(response.data.lastName)
    setGender(response.data.gender)
    setLocation(response.data.location)
    setAboutMe(response.data.aboutMe)
    setImageUrl(response.data.imageUrl)

  } catch(error) {
    console.log(error)
  }
  };

    useEffect (() => {
    getProfile() // CHANGE                                  
  }, [])

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const storedToken = localStorage.getItem('authToken');  
    await axios.put(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`, {firstName, lastName, gender, location, aboutMe, imageUrl }, { headers: { Authorization: `Bearer ${storedToken}`}
  });

   setFirstName('')
   setLastName('')
   setGender('')
   setLocation('')
   setAboutMe('')
   setImageUrl('')

   navigate(`/profile/${id}`)
} catch(error) {
  console.log(error)
}
};

const deleteProfile = async () => {
    try {
     const storedToken = localStorage.getItem('authToken');  
     await axios.delete(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}`}
    });
     navigate("/events")
  } catch(error) {
     console.log(error)
  }
};
   
  return (
    <div className="Container">
    <div className="EditProfilePage">
      <h3>Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />

        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" value={gender} onChange={handleGender} />

        <label htmlFor="location">Location</label>
        <input type="text" name="location" value={location} onChange={handleLocation} />
        
        <label htmlFor="aboutMe">Bio</label>
        <textarea
          name="aboutMe"
          value={aboutMe}
          cols="90"
          rows="3"
          onChange={handleAboutMe}
        ></textarea> 

        <label htmlFor="imageUrl">Image</label>
        <input type="file" name="imageUrl" value={imageUrl} onChange={handleImageUrl} />
        <button onClick={handleUpload}>Submit</button>

        {loading ? <p>Loading...</p> : <button to="/profile/:id"  type="submit">Edit Profile</button>}
     </form>
        <button onClick={deleteProfile}>Delete Profile</button>
    </div>
    </div>
  )
}

export default EditUserProfile; 