import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { loginUser } from '../../actions/userActions.js'
import { userInfoState } from '../../store/login.js'
import './cssLogin.scss'

const Login = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [formData, setFormData] = useState({
    email: 'u1@example.com',
    password: '1212'
  })

  const { email, password } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault()
    const loginInfo = await loginUser(email, password)
    if (loginInfo) {
      setUserInfo({
        userId: loginInfo._id,
        isAuthenticated: true,
        token: loginInfo.token,
        name: loginInfo.name,
        email: loginInfo.email
      })
      localStorage.setItem('userToken', loginInfo.token)
      localStorage.setItem('userId', loginInfo._id)
    }
    if (loginInfo === undefined || null) {
      // todo wrong email pass alert popup
    }
  }

  if (userInfo.isAuthenticated || localStorage.getItem('userToken')) {
    return <Redirect to="/homescreen" />
  }

  return (
    <>
      <Container className="form-container">
        <Form className="login-form" onSubmit={onSubmit}>
          <Form.Label
            className="align-self-baseline font-weight-bold"
            htmlFor="email"
          >
            Email
          </Form.Label>
          <Form.Control
            className="w-100 m-1"
            type="email"
            placeholder="enter email"
            name="email"
            minLength="4"
            value={email}
            onChange={(e) => onChange(e)}
          ></Form.Control>
          <Form.Label
            className="align-self-baseline font-weight-bold mt-2"
            htmlFor="password"
          >
            Password
          </Form.Label>
          <Form.Control
            className="w-100 m-1"
            type="password"
            placeholder="Password"
            name="password"
            minLength="4"
            value={password}
            onChange={(e) => onChange(e)}
          ></Form.Control>
          <Button
            type="submit"
            variant="success"
            className="w-100 mt-4 lspace-small"
          >
            Login
          </Button>
        </Form>
        <div className="features">
          <div className="feature">
            <i className="fas fa-database"></i>
            <h3>Store your Reading List</h3>
            <p>Permanently Store book list and access anytime.</p>
          </div>
          <div className="feature">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h3>Sign up and Login</h3>
            <p>Login to see and edit list.</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
