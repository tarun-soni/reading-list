import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReadMoreAndLess from 'react-read-more-less'

import { Container, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../store/login'
import { addedBookAlert, plsLoginAlert } from '../store/alerts'
import { getUserById } from '../actions/userActions'
import { addBook } from '../actions/bookActions'
const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState()

  const [userInfo] = useRecoilState(userInfoState)
  const [, setShowPlsLoginAlert] = useRecoilState(plsLoginAlert)
  const [, setAddBookAlert] = useRecoilState(addedBookAlert)

  const addBookFunction = async () => {
    const user = await getUserById(userInfo.userId)
    const bookData = {
      user,
      title: book?.volumeInfo?.title,
      description: book?.volumeInfo?.description,
      imageUrl: book?.volumeInfo?.imageLinks?.smallThumbnail,
      bookId: book?.id
    }

    if (!userInfo.isAuthenticated) {
      setShowPlsLoginAlert(true)
    } else {
      const response = await addBook(bookData)
      console.log('add book response :>> ', response)
      setAddBookAlert(true)
    }
  }

  useEffect(() => {
    async function getData() {
      //www.googleapis.com/books/v1/volumes/f280CwAAQBAJ
      const url = `https://www.googleapis.com/books/v1/volumes/${id}`

      const resp = await axios.get(url)
      setBook(resp?.data)
    }
    getData()
  }, [id])
  return (
    <Container>
      {console.log(`books`, book)}
      <Row>
        <Col md={2}>
          <Image
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt={book?.volumeInfo?.title}
            fluid
          />
        </Col>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{book?.volumeInfo?.title}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Language : {book?.volumeInfo?.language}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4> Publisher {''} </h4>
              {book?.volumeInfo?.publisher}
              <br />
              Date:
              {book?.volumeInfo?.publishedDate}
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                target="_blank"
                href={book?.volumeInfo?.previewLink}
                rel="noreferrer"
              >
                Preview Link
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Description:</h4>
              {book?.volumeInfo?.description != null ? (
                <ReadMoreAndLess
                  className="read-more-content"
                  charLimit={120}
                  readMoreText="  Read more"
                  readLessText="  Read less"
                >
                  {book?.volumeInfo?.description}
                </ReadMoreAndLess>
              ) : (
                'No description available'
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Author(s)</h4>
              {book?.volumeInfo?.authors?.map((a, index) => (
                <p key={index}>{a}</p>
              ))}
            </ListGroup.Item>
          </ListGroup>

          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Categories</h4>
                  {book?.volumeInfo?.categories?.map((c, index) => (
                    <p key={index}> {c}</p>
                  )) || <p className="text-danger">Not available</p>}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Print Type</h4>
                  {book?.volumeInfo?.printType}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Average rating</h4>
                  {book?.volumeInfo?.averageRating || 'Not available'}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <button
            type="button"
            className="btn btn-primary"
            onClick={addBookFunction}
          >
            Add to your List
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetails
