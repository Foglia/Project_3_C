import axios from 'axios';
import React from 'react'

function Favorite() {
    const [favorites, setfavorites] = useState()
    const {id} = useParams();
    const {eventsId} = useParams();

    const createFav = async () => {
        try {
        const create = await axios.put(`${process.env.REACT_APP_API_URL}/events/favorite/${eventsId}`, { headers: { Authorization: `Bearer ${storedToken}`}
        });
        setUser(create.data)
        } catch(error) {
          console.log(error)  
        }
     };

     useEffect(() => {
        createFav()
       }, []);


    //
    const returnFavs = async () => {
        try {  
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${favId}`, { headers: { Authorization: `Bearer ${storedToken}`} 
        });
        setUser(response.data);
        console.log(response.data)
        } catch(error) {
        console.log(error);  
        };
    };

        useEffect(() => {
        returnFavs()
       }, []);

    return (
    <div>
    <p>{[user.favorite]}</p>    
    </div>
  )
}