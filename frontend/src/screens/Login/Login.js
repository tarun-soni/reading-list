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
    email: '',
    password: ''
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
      localStorage.setItem('userToken', JSON.stringify(loginInfo.token))
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="w-100 m-2"
            type="email"
            placeholder="enter email"
            name="email"
            minLength="4"
            value={email}
            onChange={(e) => onChange(e)}
          ></Form.Control>
          <Form.Label htmlFor="email">Password</Form.Label>
          <Form.Control
            className="w-100 m-2"
            type="password"
            placeholder="Password"
            name="password"
            minLength="4"
            value={password}
            onChange={(e) => onChange(e)}
          ></Form.Control>
          <Button type="submit" variant="success">
            Login
          </Button>
        </Form>
        <div className="features">
          <div className="feature">
            <i className="fas fa-database"></i>
            <h3>Store Notes</h3>
            <p>Permanently Store notes and access anytime.</p>
          </div>
          <div className="feature">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h3>Sign up and Login</h3>
            <p>Login to see and edit all notes.</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
