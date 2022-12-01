import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function TNavbar() {
const { loggedIn, user, logout } = useContext(AuthContext);
const {_id} = useParams();   
      return (
    <nav>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">MONTRA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              {loggedIn && (
                <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/events">Eventos</Nav.Link>
                <Nav.Link href={`/profile/${user._id}`}>Perfil</Nav.Link>
                
                <Nav>
                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                </Nav>
                </>
                )}
                {!loggedIn && (
                <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </nav>
      );
    }
 
export default TNavbar;