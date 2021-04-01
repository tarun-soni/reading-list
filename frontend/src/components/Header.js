import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { userInfoState } from '../store/login'
import { useRecoilState } from 'recoil'

const Header = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  return (
    <Navbar
      className="font-weight-bold"
      bg="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/homescreen">
          <Navbar.Brand>Perosnal Book</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ml-auto">
          {console.log(`userInfo`, userInfo)}
          {userInfo?.isAuthenticated ? (
            <LinkContainer to="/logout">
              <Nav.Link>
                <i className="fas fa-user px-1"></i>
                LOGOUT
              </Nav.Link>
            </LinkContainer>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user px-1"></i>
                SIGN IN
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
