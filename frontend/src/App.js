import './App.scss'

import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import BookDetails from './screens/BookDetails'
import Login from './screens/Login/Login.js'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact>
            <Redirect to="/homescreen" />
          </Route>
          <Route path="/homescreen" component={HomeScreen} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/book/:id" component={BookDetails} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
