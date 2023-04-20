import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { StyledGreyButton } from "../components/Button. styled"
import $ from 'jquery'; 

function EventsCarousel() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const {id} = useParams();

$( document ).ready(() => {
  $(".carousel-control-prev, .carousel-control-next, .carousel-indicators").hide();
})

  return (
    <>
    <Carousel fade>
      <Carousel.Item interval={400} >
        <img
          className="d-block w-100"
          src="ev6.jpg"
          alt="First slide"
        />
        <Carousel.Caption controls={false}>
        <h1 className='mTitle'>MONTRA</h1>     
          <p className='subTitle'>
          Descubra os melhores eventos perto de si e saiba quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <StyledGreyButton className='greyButton'>EVENTOS</StyledGreyButton>
        </Link>
        <StyledGreyButton className='greyButton' onClick={logout}>LOGOUT</StyledGreyButton>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <StyledGreyButton className='greyButton'>SIGNUP</StyledGreyButton>
        </Link>
        <Link to="/login">
          <StyledGreyButton className='greyButton'>LOGIN</StyledGreyButton>
        </Link>
          </>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ev3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='mTitle'>MONTRA</h1>
          <p className='subTitle'>
          Descubra os melhores eventos perto de si e saiba quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <StyledGreyButton className='greyButton'>EVENTOS</StyledGreyButton>
        </Link>
        <StyledGreyButton className='greyButton' onClick={logout}>LOGOUT</StyledGreyButton>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <StyledGreyButton className='greyButton'>SIGNUP</StyledGreyButton>
        </Link>
        <Link to="/login">
          <StyledGreyButton className='greyButton'>LOGIN</StyledGreyButton>
        </Link>
          </>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ev2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='mTitle'>MONTRA</h1>
          <p className='subTitle'>
          Descubra os melhores eventos perto de si e saiba quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <StyledGreyButton className='greyButton'>EVENTOS</StyledGreyButton>
        </Link>
        <StyledGreyButton onClick={logout} className='greyButton'>LOGOUT</StyledGreyButton>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <StyledGreyButton className='greyButton'>SIGNUP</StyledGreyButton>
        </Link>
        <Link to="/login">
          <StyledGreyButton className='greyButton'>LOGIN</StyledGreyButton>
        </Link>
          </>
          )}
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="ev1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='mTitle'>MONTRA</h1>   
          <p className='subTitle'>
          Descubra os melhores eventos perto de si e saiba quem vai estar por lá...
         </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <StyledGreyButton className='greyButton'>EVENTOS</StyledGreyButton>
        </Link>
        <StyledGreyButton onClick={logout} className='greyButton'>LOGOUT</StyledGreyButton>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <StyledGreyButton className='greyButton'>SIGNUP</StyledGreyButton>
        </Link>
        <Link to="/login">
          <StyledGreyButton className='greyButton'>LOGIN</StyledGreyButton>
        </Link>
          </>
          )}
        </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item interval={500} >
        <img
          className="d-block w-100"
          src="ev9.jpg"
          alt="First slide"
        />
      <Carousel.Caption controls={false}>
      <h1 className='mTitle'>MONTRA</h1>
        <p className='subTitle'>
        Descubra os melhores eventos perto de si e saiba quem vai estar por lá...
        </p>
        {loggedIn &&  (
          <>
        <Link to="/events">
        <StyledGreyButton className='greyButton'>EVENTOS</StyledGreyButton>
        </Link>
        <StyledGreyButton onClick={logout} className='greyButton'>LOGOUT</StyledGreyButton>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
        <StyledGreyButton className='greyButton'>SIGNUP</StyledGreyButton>
        </Link>
        <Link to="/login">
          <StyledGreyButton className='greyButton'>LOGIN</StyledGreyButton>
        </Link>
          </>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </>
  )
}

export default EventsCarousel;