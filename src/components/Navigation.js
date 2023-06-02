import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'

function Navigation(){
    return(
     <nav>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
                <Navbar.Collapse id="navbarScroll">
                 <Nav>
                    <NavLink eventkey='1' as={Link} to='/'>Home</NavLink>
                    <NavLink eventkey='2' as={Link} to='/books'>Book collection</NavLink>
                    <NavLink eventkey='3' as={Link} to='/new-book'>Add a new book</NavLink>
                 </Nav>
                </Navbar.Collapse>
            </Navbar>
    </nav>
    )
}

export default Navigation