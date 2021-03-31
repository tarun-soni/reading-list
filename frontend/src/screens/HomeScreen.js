import React, { useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from '../components/CustomCard'
import SearchBox from '../components/SearchBox'
const HomeScreen = () => {
  const [bookInput, setBookInput] = useState('harry potter')
  const [books, setBooks] = useState()

  async function getData() {
    const { data: apiKey } = await axios.get('/api/config/bookKey')
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&filter=free-ebooks&key=${apiKey}`
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}`
    const resp = await axios.get(url)

    setBooks(resp?.data?.items)
  }
  return (
    <>
      <Row>
        <Col md={8}>
          <h3>Books</h3>
        </Col>
      </Row>
      <SearchBox
        bookInput={bookInput}
        setBookInput={setBookInput}
        getData={getData}
      />
      <Row>
        {books?.map((book) => (
          <>
            <CustomCard key={book.id} book={book} />
          </>
        ))}{' '}
      </Row>
    </>
  )
}

export default HomeScreen