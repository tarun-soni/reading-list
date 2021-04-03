import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

const RemoveBookBtn = () => {
  const removeBookFunction = () => {}

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
