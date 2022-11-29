import React from 'react'

function Favorite() {
    const [user, setUser] = useState()
    const {id} = useParams();

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}`} 
    });
    setUser(response.data);
    console.log(response.data)
    } catch(error) {
    console.log(error);  
    };


    return (
    <div>
    <p>{[user.favorite]}</p>    
    </div>
  )


export default Favorite