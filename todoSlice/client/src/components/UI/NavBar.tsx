import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useAppSelector } from '../../hooks/reduxHook';
import authHooks from '../../hooks/authHook';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user)
  const {signOutActionHandler} = authHooks()
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#">Todo-list</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            MainPage
          </NavLink>
        </Nav>
        <Nav>
          {user.status !== 'success' ? (
            <>
              <NavLink className="nav-link" to="/auth/signup">
                SignUp
              </NavLink>
              <NavLink className="nav-link" to="/auth/signin">
                SignIn
              </NavLink>
            </>
          ) : (
            <Nav.Link onClick={(e) => void signOutActionHandler(e)} className="nav-link">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
