import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { userInfoState } from '../store/login'
import { useRecoilState } from 'recoil'
import { logoutUser } from '../actions/userActions'
const Header = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  useEffect(() => {
    console.log(`userInfo`, userInfo)
  }, [userInfo])

  const logout = async () => {
    await logoutUser()
    setUserInfo({
      userId: null,
      isAuthenticated: false,
      token: null,
      name: '',
      email: ''
    })
  }

  return (
    <Navbar className="font-weight-bold" bg="light" collapseOnSelect>
      <Container>
        <LinkContainer to="/homescreen">
          <Navbar.Brand>Perosnal Reading App</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ml-auto">
          {console.log(`userInfo`, userInfo)}
          {userInfo?.isAuthenticated ? (
            <LinkContainer to="/homescreen">
              <Nav.Link onClick={logout}>
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
