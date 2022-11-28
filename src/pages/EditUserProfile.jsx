// import React from 'react';
// import { useState, useEffect} from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; //useNavigate - be smoooooooth 
// import axios from 'axios';

// function EditUserProfile() {
//     const [imageUrl, setImageUrl] = useState('')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [gender, setGender] = useState('')
//     const [location, setLocation] = useState('')
//     const [aboutMe, setAboutMe] = useState('')

//     const handleFirstName = (e) => setFirstName(e.target.value);
//     const handleLastName = (e) => setLastName(e.target.value);
//     const handleGender = (e) => setGender(e.target.value);
//     const handleLocation = (e) => setLocation(e.target.value);
//     const handleAboutMe = (e) => setAboutMe(e.target.value);

//     const {user_id} = useParams();
//     const navigate = useNavigate();

//     const getUser = async() => {
//         try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user_id}`) 
//         setImageUrl(response.data.imageUrl)
//         setFirstName(response.data.firstName)
//         setLastName(response.data.lastName)
//         setGender(response.data.gender)
//         setLocation(response.data.location)
//         setAboutMe(response.data.aboutMe)
//         } catch(error){
//           console.log(error);      
//         }
//     };

//     useEffect(() => {
//       getUser();
//       }, [id]);  

//   //EDIT
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const storedToken = localStorage.getItem('authToken');  
//     await axios.put(`${process.env.REACT_APP_API_URL}/edit-profile/${user_id}`, { imageUrl, firstName, lastName, gender, location, aboutMe }, { headers: { Authorization: `Bearer ${storedToken}` }  
//   }); 

//   //CLEAR THE FORM
//     setImageUrl('');
//     setFirstName('');  
//     setLastName('');  
//     setGender('');  
//     setLocation('');  
//     setAboutMe('');  

//     navigate(`/profile/${user_id}`)
//   } catch(error) {
//     console.log(error);
//   }
//   };

//   const deleteUser = async () => {
//     try {
//       const storedToken = localStorage.getItem('authToken');  
//       await axios.delete(`${process.env.REACT_APP_API_URL}/delete-profile/${user_id}`, { headers: { Authorization: `Bearer ${storedToken}` }  
//     });  
//       navigate('/events');
//     } catch(error) {
//       console.log(error);  
//     }
// };

// return (
//     <div className='EditUserProfile'>
//     <h4>Hello {firstName}, change your data here:</h4>
//         <form onSubmit={handleSubmit}>
//         <label htmlFor='imageUrl'>Profile Image:</label>
//         <input type='text' name='firstName' value={firstName} onChange={handleFirstName}/>
//         <label htmlFor='lastName'>Last Name:</label>
//         <input type='text' name='lastName' value={lastName} onChange={handleLastName}/>
//         <label htmlFor='gender'>Gender:</label>
//         <input type='text' name='gender' value={gender} onChange={handleGender}/>
//         <label htmlFor='location'>Location:</label>
//         <input type='text' name='location' value={location} onChange={handleLocation}/>
//         <label htmlFor='aboutMe'>Small Bio:</label>
//         <textarea
//         name='aboutMe'
//         value={aboutMe}
//         cols='20'
//         rows='5'
//         onChange={handleAboutMe}
//         ></textarea>
//         <button type='submit'>Save Changes</button>
//         <button onClick={deleteUser}>Wanna quit :( ?</button>

//         </form>    
//     </div>
//   )
// }

// export default EditUserProfile