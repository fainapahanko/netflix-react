import React from 'react';
import { Navbar, Nav, NavItem,} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../index.css'

const Navigation = () => {
  return (
      <Navbar color="dark" expand="md">
        <Link to="/" className="nav-brand nav-item-strivfilx">Home cinema</Link>
            <Nav navbar>
                <NavItem>
                    <Link to="/movielist" className="nav-link nav-item-strivfilx">List of movies</Link>
                </NavItem>
                <NavItem>
                    <Link to="/nodejslol" className="nav-link nav-item-strivfilx">new movies</Link>
                </NavItem>
                <NavItem>
                    <Link to="/send-me-pdf" className="nav-link nav-item-strivfilx">Send me pdf</Link>
                </NavItem>
            </Nav>
        </Navbar>
  )
}

export default Navigation