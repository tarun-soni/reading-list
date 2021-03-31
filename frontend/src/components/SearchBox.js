import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ bookInput, setBookInput, getData }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    getData()
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        value={bookInput}
        type="text"
        name="q"
        onChange={(e) => setBookInput(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="success" className="p-2 btn-sm">
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
