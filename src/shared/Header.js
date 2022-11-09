import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import imglogo from '../assets/barber.png';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark opacity-75" variant="dark" className='fs-4 fw-semibold  w-100 py-3' style={{ zIndex: '111' }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={imglogo}
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Barber JHON
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>

                        <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Sign Up</Nav.Link>
                        <Nav.Link className='bg-warning text-dark rounded' onClick={handleLogOut}>LogOut</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Header;