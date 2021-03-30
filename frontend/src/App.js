import './App.css'
import { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'
import axios from 'axios'
const App = () => {
  const [bookInput, setBookInput] = useState('harrypotter')
  // const [apiKey] = useState(process.env.REACT_APP_GBOOK_API_KEY)
  useEffect(() => {
    async function getData() {
      const { data: apiKey } = await axios.get('/api/config/bookKey')
      const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&filter=free-ebooks&key=${apiKey}`
      const resp = await axios.get(url)

      console.log(`resp.data`, resp.data)
    }
    getData()
  }, [bookInput])

  return <div className="App"></div>
}

export default App
