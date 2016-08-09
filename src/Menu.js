import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Menu = () => {
	return(
	  // <div>
	  // 	<Link to='/about'>À propos</Link>
	  //   <Link to='/'>Ajout d'une dépense</Link>
	  // </div>
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <Link to="/">Gestion des dépenses</Link>
	      </Navbar.Brand>
	    </Navbar.Header>
	    <Nav>
	      <LinkContainer to="/about">
	      	<NavItem href="about" eventKey={1}>À propos</NavItem>
	      </LinkContainer>
	      <LinkContainer to="/addDep">
	      	<NavItem eventKey={2}>Ajout Dépense</NavItem>
	      </LinkContainer>
	      <NavDropdown eventKey={3} title="Rapport" id="basic-nav-dropdown">
	        <MenuItem eventKey={3.1}>Rapport 1</MenuItem>
	      </NavDropdown>
	    </Nav>
	  </Navbar>
	);
};

export default Menu;