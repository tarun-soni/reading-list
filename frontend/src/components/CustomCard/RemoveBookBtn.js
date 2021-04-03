import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { deleteBook } from '../../actions/bookActions'
import { removeBookAlert } from '../../store/alerts'
import { loadingState } from '../../store/loading'

const RemoveBookBtn = ({ bookId }) => {
  const [loading, setLoading] = useRecoilState(loadingState)
  const [, setRemoveBookAlert] = useRecoilState(removeBookAlert)
  const removeBookFunction = async () => {
    setLoading(true)
    console.log('bookId btn :>> ', bookId)
    const deleteRes = await deleteBook(bookId)
    if (deleteRes === 'success') {
      setRemoveBookAlert(true)

      console.log('book deletedddd')
      setLoading(false)
    } else {
      console.log('deleteRes :>> ', deleteRes)
      setLoading(false)
    }
  }

  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`tooltip-top`}>Remove Book</Tooltip>}
      >
        <Button
          className="btn-div"
          variant="outline"
          onClick={removeBookFunction}
        >
          <i className="fa fa-minus p-2" />
        </Button>
      </OverlayTrigger>
    </>
  )
}

export default RemoveBookBtn
