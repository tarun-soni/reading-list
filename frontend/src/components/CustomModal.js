import { Button, Col, Form, Modal } from 'react-bootstrap'
const CustomModal = ({ submitBook, bookData, setBookData, ...props }) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create your Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md={12}>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="mt-2">Book Tite</Form.Label>
                <Form.Control
                  type="text"
                  value={bookData.title}
                  onChange={(e) =>
                    setBookData({ ...bookData, title: e.target.value })
                  }
                />
                <Form.Label className="mt-2">Description</Form.Label>
                <Form.Control
                  type="text"
                  value={bookData.description}
                  onChange={(e) =>
                    setBookData({
                      ...bookData,
                      description: e.target.value
                    })
                  }
                />
                <Form.Label className="mt-2">Image Url</Form.Label>
                <Form.Control
                  type="text"
                  value={bookData.imageUrl}
                  onChange={(e) =>
                    setBookData({
                      ...bookData,
                      imageUrl: e.target.value
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={submitBook}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CustomModal
