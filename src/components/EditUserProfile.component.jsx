import { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"

function EditUserProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [loading, setLoading] = useState(false);

    const {id} = useParams()
    const navigate = useNavigate()

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

    const getProfile = async () => {
        try {
const response = await axios.get(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`)

setFirstName(response.data.firstName)
setLastName(response.data.lastName)
setImageUrl(response.data.imageUrl)
setGender(response.data.gender)
setLocation(response.data.location)
setAboutMe(response.data.aboutMe)
console.log(response.data)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getProfile()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
try{

    await axios.put(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`, {firstName, lastName, gender, location, aboutMe })

setFirstName('');
lastName('');
imageUrl('');
gender('');
location('');
aboutMe('');
navigate(`/profile/${id}`)


} catch(error) {
    console.log(error)
}
}

const deleteProfile = async () => {

    try {
await axios.delete(`${process.env.REACT_APP_API_URL}/edit-profile/${id}`)
navigate("/profile")

    } catch(error) {
        console.log(error)
    }
}
   
  return (

    <div className="EditProfilePage">
        <h3>Edit Profile</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
        <label htmlFor="FirstName">Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
        <label htmlFor="title">Gender</label>
        <input type="text" name="gender" value={gender} onChange={handleGender} />
        <label htmlFor="title">Location</label>
        <input type="text" name="location" value={location} onChange={handleLocation} />

       <textarea
          name="description"
          value={aboutMe}
          cols="30"
          rows="10"
          onChange={handleAboutMe}
        ></textarea> 

        <label htmlFor="image">Profile Image</label>
        <input type="file" name="image" onChange={handleUpload} />

        {loading ? <p>Loading...</p> : <button to="/profile/:id" type="submit">Edit Profile</button>}
      </form>

<button onClick={deleteProfile}>Delete Profile</button>

    </div>
  )
}

export default EditUserProfile; 