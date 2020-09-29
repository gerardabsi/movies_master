import React, { useState, ChangeEvent, useCallback, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import logo from '../../../Assets/Images/logo.png';
import { search, notification, profile } from '../../../Assets/Images/Navigation';
import './Navigation.scss';
import { searchMovies } from '../../../Services/Search';

export const Navigation: React.FC = () => {
  const history = useHistory();
  const [searchParams, setSearchParams] = useState('');

  const fetchSearchData = async () => {
    try {
      if (searchParams) {
        const searchData = await searchMovies(searchParams);
        const location = {
          pathname: '/search',
          state: { searchData },
        };
        history.push(location);
      } else {
        history.push('/');
      }
    } catch (e) {
      // TODO Catch error
    }
  };

  const delayedSearch = useCallback(debounce(fetchSearchData, 1000), [searchParams]);

  const onSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
  };

  useEffect(() => {
    delayedSearch();

    return delayedSearch.cancel;
  }, [searchParams, delayedSearch]);

  return (
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
          <div className="menu-search-container">
            <img className="search-icon" src={search} alt="" />
            <input
              value={searchParams}
              onChange={onSearch}
              className="search-input"
              type="text"
              placeholder="Title, genres, people"
            />
          </div>
          <div className="menu-notification-container">
            <img className="search-icon" src={notification} alt="" />
          </div>
          <NavDropdown title={<img className="thumbnail-image" src={profile} alt="user pic" />} id="basic-nav-dropdown">
            <NavDropdown.Item href="">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
