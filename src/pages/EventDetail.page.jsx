import React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar.component';
import axios from "axios";
import { StyledButton } from "../components/Button. styled"


function EventDetail() {
    const [event, setEvent] = useState ({})  //Mudar sempre o Use State para testas
    const {Name} = useParams();
    const navigate = useNavigate();

    const getEvent = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/event-search?Name=${Name}`)
    setEvent(response.data)
    console.log(response.data)
    } catch(error) {
    console.log(error)
    }
  }
    useEffect (() => {
    getEvent()
    }, [])

    // this will create event ID 
    const createEvent = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/event-search?Name=${Name}`, null,
         { headers: { Authorization: `Bearer ${storedToken}` } // sempre 3 arg num post e put  
   })
        const event = response.data
        return event;
      } catch (error) {
        console.log(error)
      }
    }

  // this will call route to favs 
  // needs to call the create event

    const addFavourite = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const event = await createEvent()
        await axios.put(`${process.env.REACT_APP_API_URL}/events/favorite/${event._id}`, null, { headers: { Authorization: `Bearer ${storedToken}`}})
        navigate(`/community/${event._id}`) 
      } catch (error) {
        console.log(error)
      }
    }

    const addAttendance = async () => {
      try {
        const storedToken = localStorage.getItem('authToken') 
        const event = await createEvent()
        await axios.put(`${process.env.REACT_APP_API_URL}/events/attend/${event._id}`, null, { headers: { Authorization: `Bearer ${storedToken}`}
      })
        navigate(`/community/${event._id}`) 
      } catch (error) {
        console.log(error)
      }
    }
   
return (
  <>
  <Navbar />
    <div className= "EventDetails">
          <div className='eMainT'>
          <h1 className='eTitle'>{event.Name}</h1> 
          <p><box-icon name="map" size="xs" color="red"> </box-icon>{event.Location}
          <div style={{textDecoration:'none'}} dangerouslySetInnerHTML={{ __html:event.Where, }} /></p>
          </div>
          <img className="DetailImg" src={event.ImageUrl} />
          <div className='typeOf'>
          <p className='nSpace'><b>Data: </b>{event.StartDate}</p>
          <p className='nSpace'><b>Termina em: </b>{event.EndDate}</p> 
          <p className='nSpace'><b>{event.Theme} . {event.Type}</b></p>
          <p className='nSpace'><b>{event.Who}</b></p>
          </div>
          <p className="eDescription">
          <div dangerouslySetInnerHTML={{ __html:event.Text }} /> 
          </p>
          <hr />
          <p><box-icon name="dollar-circle" size="xs" color="red"></box-icon><div dangerouslySetInnerHTML={{ __html:event.Price }} /></p>
          <box-icon name="plus-circle" size="xs" color="red"></box-icon>
          <p><div className="saberMais" dangerouslySetInnerHTML={{ __html:event.Info }} /></p> 
          <box-icon name="link" size="xs" color="red"></box-icon>
          <a className="linkB" href={event.Url} target="blank">Link</a>
          <hr />

    <div className='clickEvent'>
    <div className='bAlign'>
     <StyledButton primary onClick={addAttendance} className="columnB">COMPARECER</StyledButton>
     <StyledButton onClick={addFavourite} className="columnB"> SALVAR </StyledButton> {/* botao funcional */}
     </div>
    </div> 
    </div>
    </>
  )
}




export default EventDetail;