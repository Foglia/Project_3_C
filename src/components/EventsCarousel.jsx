import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function EventsCarousel() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const {id} = useParams();
  return (
    <>
    <Carousel fade>
      <Carousel.Item interval={500} >
        <img
          className="d-block w-100"
          src="ev6.jpg"
          alt="First slide"
        />
        <Carousel.Caption controls={false}>
        <h1>MONTRA</h1>
        <h3>PT</h3>         
          <p>
          Conheça os melhores eventos perto de si e descubra quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <button>Events</button>
        </Link>
        <button onClick={logout}>Logout</button>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
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
        <h1>MONTRA</h1>
        <h3>PT</h3>         
          <p>
          Conheça os melhores eventos perto de si e descubra quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <button>Events</button>
        </Link>
        <button onClick={logout}>Logout</button>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
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
          <h1>MONTRA</h1>
          <h3>PT</h3>         
          <p>
          Conheça os melhores eventos perto de si e descubra quem vai estar por lá...
          </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <button>Events</button>
        </Link>
        <button onClick={logout}>Logout</button>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
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
        <h1>MONTRA</h1>
        <h3>PT</h3>         
          <p>
          Conheça os melhores eventos perto de si e descubra quem vai estar por lá...
         </p>
          {loggedIn &&  (
          <>
        <Link to="/events">
        <button>Events</button>
        </Link>
        <button onClick={logout}>Logout</button>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
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
      <h1>MONTRA</h1>
      <h3>PT</h3>         
        <p>
          Conheça os melhores eventos perto de si e descubra quem vai estar por lá...
        </p>
        {loggedIn &&  (
          <>
        <Link to="/events">
        <button>Events</button>
        </Link>
        <button onClick={logout}>Logout</button>
          </>
          )}
          {!loggedIn && (
          <>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
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