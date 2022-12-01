import React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import service from "../api/service";

function EditUserProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [loading, setIsUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState('');

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleAboutMe = (e) => setAboutMe(e.target.value);

    const storedToken = localStorage.getItem('authToken');  

    const handleFileUpload = (e) => {
      const uploadData = new FormData();
      setIsUploading(true);
      uploadData.append("imageUrl", e.target.files[0]);
  
      service
        .uploadImage(uploadData)
        .then((response) => {
          setIsUploading(false);
          setImageUrl(response.fileUrl);
        })
        .catch((err) => console.log(err));
    }; 


  const {id} = useParams()
  const navigate = useNavigate()

  const getProfile = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`,{ headers: { Authorization: `Bearer ${storedToken}`}
  })

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
    getProfile()                            
  }, [])

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {

    await axios.put(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`, {firstName, lastName, gender, location, aboutMe, imageUrl }, { headers: { Authorization: `Bearer ${storedToken}`}
  });

   navigate(`/profile/${id}`)
} catch(error) {
  console.log(error)
}
};
   
  return (
    
    <div className="EditProfilePage1">
      <h3 class="titleEdit">Editar Perfil</h3>
      <form onSubmit={handleSubmit}>
<div class="mb-5">
<label for="Name" class="form-label">Nome</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
</div>
<div class="mb-5">
  <label for="lastName" class="form-label">Apelido</label>
  <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
</div>
<div class="mb-5">
  <label for="gender" class="form-label">Género</label>
  <input type="text" name="gender" value={gender} onChange={handleGender }/>
</div>
<div class="mb-5">
  <label for="location" class="form-label">Cidade</label>
  <input type="text" name="location" value={location} onChange={handleLocation} />
</div>
<div class="mb-5">
  <label for="About me" class="form-label">Bio</label>
  <input type="text" name="bio" value={aboutMe} onChange={handleAboutMe} />
</div>
        <label htmlFor="imageUrl">Image</label>
        
        <input type="file" name="imageUrl" onChange={handleFileUpload} />

        {loading ? <p>Loading ... </p> : <p></p>}
        <button type="submit">Editar Perfil</button>
     </form>
    </div>

  )
}



export default EditUserProfile; 

