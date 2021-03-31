import './App.css'

import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
