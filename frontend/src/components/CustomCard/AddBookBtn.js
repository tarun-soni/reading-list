import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { getUserById } from '../../actions/userActions.js'
import { addBook } from '../../actions/bookActions.js'
import { userInfoState } from '../../store/login.js'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
export const AddBookBtn = ({ title, imageUrl, description, bookId }) => {
  const [userInfo] = useRecoilState(userInfoState)
  const [showPlsLoginAlert, setShowPlsLoginAlert] = useState(false)

  const addBookFunction = async () => {
    const user = await getUserById(userInfo.userId)
    console.log('clicked')
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
