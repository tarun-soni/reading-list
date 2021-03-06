import React, { useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from '../components/CustomCard/CustomCard'
import SearchBox from '../components/SearchBox'

const HomeScreen = () => {
  const [bookInput, setBookInput] = useState('harry potter')

  const [books, setBooks] = useState()
  async function searchSubmit() {
    const { data: apiKey } = await axios.get('/api/config/bookKey')
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&filter=free-ebooks&key=${apiKey}`
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}`
    const resp = await axios.get(url)

    setBooks(resp?.data?.items)
  }

  return (
    <>
      <Row>
        <Col md={4} lg={8}>
          <h3> Search Books</h3>
        </Col>
        <Col>
          <SearchBox
            bookInput={bookInput}
            setBookInput={setBookInput}
            searchSubmit={searchSubmit}
          />
        </Col>
      </Row>
      <Row>
        {books?.map((book, index) => (
          <CustomCard
            key={index}
            bookId={book.id}
            title={book?.volumeInfo?.title}
            img={book?.volumeInfo?.imageLinks?.smallThumbnail}
            description={book?.volumeInfo?.description}
            previewLink={book?.volumeInfo?.previewLink}
            categories={book?.volumeInfo?.categories}
            fromMyList={false}
          />
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
