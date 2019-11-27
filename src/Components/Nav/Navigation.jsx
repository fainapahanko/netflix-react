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
            </Nav>
        </Navbar>
  )
}

export default Navigation