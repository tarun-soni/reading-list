import './App.scss'

import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import BookDetails from './screens/BookDetails'
import Login from './screens/Login/Login.js'
import MyList from './screens/MyList'
import { useEffect } from 'react'
import { getUserById } from './actions/userActions'
import { useRecoilState } from 'recoil'
import { userInfoState } from './store/login'

const App = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  useEffect(() => {
    async function getData() {
      if (localStorage.getItem('userId') && localStorage.getItem('userToken')) {
        const res = await getUserById(localStorage.getItem('userId'))
        setUserInfo({
          ...userInfo,
          userId: res?._id,
          isAuthenticated: true,
          name: res?.name,
          email: res?.email
        })
      } else {
        setUserInfo({
          token: null,
          userId: null,
          isAuthenticated: false,
          name: null,
          email: null
        })
      }
    }
    getData()
    // eslint-disable-next-line
  }, [])
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact>
            <Redirect to="/homescreen" />
          </Route>
          <Route path="/homescreen" component={HomeScreen} exact />
          <Route path="/my-list" component={MyList} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/book/:id" component={BookDetails} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
