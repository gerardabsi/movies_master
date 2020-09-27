import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../Assets/Images/logo.png';
import { search, notification, profile } from '../../../Assets/Images/Navigation';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <Navbar expand="lg" className="main-navigation sidebar-nav" fixed="top">
    <Navbar.Brand href="/">
      <img className="thumbnail-image" src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle data-toggle="offcanvas" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between align-items-center w-100">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#series">Series</Nav.Link>
        <Nav.Link href="#link">Action</Nav.Link>
        <Nav.Link href="#link">Comedy</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse
      id="basic-navbar-nav"
      className="flex-row justify-content-md-center justify-content-start flex-nowrap">
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <img className="menu-icon" src={search} alt="" />
        </Nav.Link>
        <Nav.Link href="#home">
          <img className="menu-icon" src={notification} alt="" />
        </Nav.Link>
        <NavDropdown title={<img className="thumbnail-image" src={profile} alt="user pic" />} id="basic-nav-dropdown">
          <NavDropdown.Item href="">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
