import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { userInfoState } from '../store/login'
import { useRecoilState } from 'recoil'
import { logoutUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
import CustomToast from './CustomToast'
import { addedBookAlert, plsLoginAlert, removeBookAlert } from '../store/alerts'

const Header = () => {
  const [addBookAlertState, setAddBookAlert] = useRecoilState(addedBookAlert)
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [showPlsLoginAlert, setShowPlsLoginAlert] = useRecoilState(
    plsLoginAlert
  )
  const [removeBookAlertState, setRemoveBookAlert] = useRecoilState(
    removeBookAlert
  )
  const history = useHistory()

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
      {showPlsLoginAlert && (
        <CustomToast
          variant="danger"
          onClose={() => setShowPlsLoginAlert(false)}
          msg="Please Login to add Books"
        />
      )}
      {addBookAlertState && (
        <CustomToast
          variant="success"
          onClose={() => setAddBookAlert(false)}
          msg="Book Added to your Reading list"
        />
      )}
      {removeBookAlertState && (
        <CustomToast
          variant="info"
          onClose={() => setRemoveBookAlert(false)}
          msg="Book Removed from your Reading list"
        />
      )}
      <Container>
        <LinkContainer to="/homescreen">
          <Navbar.Brand>Perosnal Reading Collection</Navbar.Brand>
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
