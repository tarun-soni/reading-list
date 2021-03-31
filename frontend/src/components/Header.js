import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar
      className="font-weight-bold"
      bg="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Perosnal Book</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={'user'} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
