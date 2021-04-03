import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import CustomCard from '../components/CustomCard'
import SearchBox from '../components/SearchBox'
import { getUserById } from '../actions/userActions'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../store/login'
const HomeScreen = () => {
  const [bookInput, setBookInput] = useState('harry potter')
  const [books, setBooks] = useState()
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  async function getData() {
    const { data: apiKey } = await axios.get('/api/config/bookKey')
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&filter=free-ebooks&key=${apiKey}`
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}`
    const resp = await axios.get(url)

    setBooks(resp?.data?.items)
  }

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

        console.log('res :>> ', res)
      } else {
        console.log('logged out')
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
    //eslint-disable
  }, [])
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
          <CustomCard
            key={book?.id}
            bookId={book?.id}
            title={book?.volumeInfo?.title}
            img={book?.volumeInfo?.imageLinks?.smallThumbnail}
            description={book?.volumeInfo?.description}
            previewLink={book?.volumeInfo?.previewLink}
            categories={book?.volumeInfo?.categories}
          />
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
