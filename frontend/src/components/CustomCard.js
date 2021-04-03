import React, { useEffect, useState } from 'react'
import { Card, NavLink } from 'react-bootstrap'
import ReadMoreAndLess from 'react-read-more-less'
import { useRecoilState } from 'recoil'
import { getUserById } from '../actions/userActions.js'
import { addBook } from '../actions/bookActions.js'
import { userInfoState } from '../store/login.js'
const CustomCard = ({ book }) => {
  return (
    <>
      <Card className="m-3 card-hover" style={{ width: '20rem' }}>
        <Card.Header className="p-3 d-flex">
          {book?.volumeInfo?.title}
        </Card.Header>

        <div
          className="d-flex p-3 align-center justify-content-center"
          style={{ height: '15rem' }}
        >
          {book?.volumeInfo?.imageLinks.smallThumbnail ? (
            <Card.Img
              className="border-black"
              style={{ width: 'auto' }}
              src={book?.volumeInfo?.imageLinks?.smallThumbnail}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="d-block user-select-none"
              width="100%"
              height="200"
              aria-label="Placeholder: Image cap"
              focusable="false"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 318 180"
              style={{ fontSize: '1.125rem', textAnchor: 'middle' }}
            >
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                No Image
              </text>
            </svg>
          )}
        </div>

        <Card.Body>
          <div className="card--desc">
            {book?.volumeInfo.description != null ? (
              <ReadMoreAndLess
                className="read-more-content"
                charLimit={120}
                readMoreText="  Read more"
                readLessText="  Read less"
              >
                {book?.volumeInfo?.description}
              </ReadMoreAndLess>
            ) : (
              'no desc'
            )}
          </div>
        </Card.Body>

        {/* todo make these both btns more prominent */}
        <Card.Body
          className="d-flex align-items-center justify-content-between"
          style={{ height: '3rem' }}
        >
          <Card.Link target="_blank" href={book?.volumeInfo?.previewLink}>
            Preview link
          </Card.Link>
          <NavLink to={`/book/${book.id}`}>
            <Card.Link>More Info</Card.Link>
          </NavLink>

          <AddBookBtn
            bookId={book.id}
            title={book?.volumeInfo?.title}
            description={book?.volumeInfo.description}
            imageUrl={book?.volumeInfo?.imageLinks?.smallThumbnail}
          />
        </Card.Body>

        <Card.Footer className="text-muted">
          {book?.volumeInfo?.categories?.map((c, index) => (
            <p key={index}> Categories: {c}</p>
          ))}
        </Card.Footer>
      </Card>
    </>
  )
}

export default CustomCard

const AddBookBtn = ({ title, imageUrl, description, bookId }) => {
  const [userInfo] = useRecoilState(userInfoState)
  const [showPlsLoginAlert, setShowPlsLoginAlert] = useState(false)
  // useEffect(() => {
  //   const getData = async () => {
  //     const responseID = await getUserById(userInfo.userId)
  //     console.log('responseID :>> ', responseID)
  //   }
  //   getData()
  // }, [userInfo])

  const addBookFunction = async () => {
    const user = await getUserById(userInfo.userId)
    console.log('responseID :>> ', user)
    console.log('clicked')
    // todo add user from get user
    const bookData = {
      user,
      title,
      description,
      imageUrl,
      bookId
    }

    if (!userInfo.isAuthenticated) {
      // todo show alert pls login
      setShowPlsLoginAlert(true)
    } else {
      console.log('bookData :>> ', bookData)
      const response = await addBook(bookData)
      console.log('response :>> ', response)
    }
  }

  return (
    <>
      {showPlsLoginAlert && (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Oh snap!</strong>{' '}
          <a href="#/" class="alert-link">
            Change a few things up
          </a>{' '}
          and try submitting again.
        </div>
      )}
      <div className="btn-div px-2" onClick={addBookFunction}>
        <i className="fa fa-plus p-2" />
      </div>
    </>
  )
}
