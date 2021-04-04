import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { deleteBook } from '../../actions/bookActions'
import { removeBookAlert } from '../../store/alerts'
import { loadingState } from '../../store/loading'

const RemoveBookBtn = ({ bookId }) => {
  const [, setLoading] = useRecoilState(loadingState)
  const [, setRemoveBookAlert] = useRecoilState(removeBookAlert)
  const removeBookFunction = async () => {
    setLoading(true)
    const deleteRes = await deleteBook(bookId)
    if (deleteRes === 'success') {
      setRemoveBookAlert(true)

      setLoading(false)
    } else {
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
