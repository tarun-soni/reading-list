import React from 'react'
import { useRecoilState } from 'recoil'
import { getUserById } from '../../actions/userActions.js'
import { addBook } from '../../actions/bookActions.js'
import { userInfoState } from '../../store/login.js'
import { addedBookAlert, plsLoginAlert } from '../../store/alerts.js'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
export const AddBookBtn = ({ title, imageUrl, description, bookId }) => {
  const [userInfo] = useRecoilState(userInfoState)
  const [, setShowPlsLoginAlert] = useRecoilState(plsLoginAlert)
  const [, setAddBookAlert] = useRecoilState(addedBookAlert)

  const addBookFunction = async () => {
    const user = await getUserById(userInfo.userId)
    const bookData = {
      user,
      title,
      description,
      imageUrl,
      bookId
    }

    if (!userInfo.isAuthenticated) {
      setShowPlsLoginAlert(true)
    } else {
      const response = await addBook(bookData)
      setAddBookAlert(true)
    }
  }

  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`tooltip-top`}>Add Book</Tooltip>}
      >
        <Button className="btn-div" variant="outline" onClick={addBookFunction}>
          <i className="fa fa-plus p-2" />
        </Button>
      </OverlayTrigger>
    </>
  )
}
