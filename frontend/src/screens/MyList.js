import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { addBook, getUserBooks } from '../actions/bookActions'
import CustomCard from '../components/CustomCard/CustomCard'
import Loader from '../components/Loader'
import { loadingState } from '../store/loading'
import { userInfoState } from '../store/login'
import { v4 as uuidv4 } from 'uuid'
import { getUserById } from '../actions/userActions'
import { addedBookAlert } from '../store/alerts'
import CustomModal from '../components/CustomModal'
const MyList = () => {
  const [userInfo] = useRecoilState(userInfoState)
  const [, setAddBookAlert] = useRecoilState(addedBookAlert)
  const [showAddModal, setShowAddModal] = useState(false)
  const [loading, setLoading] = useRecoilState(loadingState)

  const [userBooks, setUserBooks] = useState(null)
  const [bookData, setBookData] = useState({
    title: 'Test Title',
    description: 'Test Description',
    imageUrl:
      'https://assets.teenvogue.com/photos/5cd2d85354a1342b5187a5c4/master/w_1600%2Cc_limit/TheGravityofUs_cata_9781547600144%252520.jpg'
  })
  const addBookFunction = async () => {
    setLoading(true)
    const user = await getUserById(userInfo.userId)

    const bookDataToPass = {
      user,
      bookId: uuidv4(),
      title: bookData.title,
      description: bookData.description,
      imageUrl: bookData.imageUrl
    }
    const response = await addBook(bookDataToPass)
    console.log('add book response :>> ', response)
    if (response === 'success') {
      setAddBookAlert(true)
    }
    setShowAddModal(false)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const responseBooks = await getUserBooks(userInfo.userId)
      setUserBooks(responseBooks)
    }
    getData()
    setLoading(false)
    // eslint-disable-next-line
  }, [userInfo.userId, loading])

  return (
    <div>
      {loading && <Loader />}

      <Row className="d-flex align-items-center justify-content-between">
        {showAddModal && (
          <CustomModal
            show={showAddModal}
            onHide={() => setShowAddModal(false)}
            submitBook={addBookFunction}
            bookData={bookData}
            setBookData={setBookData}
          />
        )}

        <h3>MY Books</h3>
        <Col md={8}>
          <Button
            className="float-right"
            vaiant="primary"
            onClick={() => setShowAddModal(true)}
          >
            Add Custom Book
          </Button>
        </Col>
      </Row>
      <Row>
        {userBooks?.map((book) => (
          <CustomCard
            key={book._id}
            bookId={book._id}
            title={book?.title}
            img={book?.imageUrl}
            description={book?.description}
            previewLink={book?.previewLink}
            fromMyList={true}

            // categories={book?.categories?}
          />
        ))}
      </Row>
    </div>
  )
}

export default MyList
