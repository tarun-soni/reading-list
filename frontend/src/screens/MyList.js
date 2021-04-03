import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { getUserBooks } from '../actions/bookActions'
import CustomCard from '../components/CustomCard/CustomCard'
import Loader from '../components/Loader'
import { loadingState } from '../store/loading'
import { userInfoState } from '../store/login'

const MyList = () => {
  const [userInfo] = useRecoilState(userInfoState)
  const [loading, setLoading] = useRecoilState(loadingState)
  const [userBooks, setUserBooks] = useState(null)
  useEffect(() => {
    setLoading(true)
    async function getData() {
      const responseBooks = await getUserBooks(userInfo.userId)
      console.log('responseBooks :>> ', responseBooks)
      setUserBooks(responseBooks)
    }
    getData().then(setLoading(false))
  }, [userInfo.userId, loading])

  return (
    <div>
      {loading && <Loader />}

      <Row>
        <Col md={8}>
          <h3>MY Books</h3>
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
