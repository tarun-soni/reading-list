import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { userInfoState } from '../store/login'
import { useRecoilState } from 'recoil'
import { logoutUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
import Message from './Message'
import CustomToast from './CustomToast'
import { addedBookAlert } from '../store/alerts'

const Header = () => {
  const [addBookAlertState, setAddBookAlert] = useRecoilState(addedBookAlert)
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const history = useHistory()
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
    history.push('/')
  }

  return (
    <Navbar className="font-weight-bold" bg="light sticky-top" collapseOnSelect>
      {addBookAlertState && (
        <>
          <CustomToast onClick={() => setAddBookAlert(false)} />
        </>
      )}

      <Container>
        <LinkContainer to="/homescreen">
          <Navbar.Brand>Perosnal Reading App</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ml-auto">
          {userInfo?.isAuthenticated ? (
            <NavDropdown title={userInfo?.name?.toUpperCase()} id="username">
              <LinkContainer to="/my-list">
                <NavDropdown.Item>MY READING LIST</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logout}>LOGOUT</NavDropdown.Item>
            </NavDropdown>
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
