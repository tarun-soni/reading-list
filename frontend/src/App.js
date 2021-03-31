import './App.scss'

import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import BookDetails from './screens/BookDetails'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/book/:id" component={BookDetails} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
