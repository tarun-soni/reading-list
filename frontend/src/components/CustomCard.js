import React from 'react'
import { Card } from 'react-bootstrap'
const CustomCard = ({ book }) => {
  return (
    <>
      {console.log('book', book)}
      <Card className="card border-primary m-3" style={{ maxWidth: '20rem' }}>
        <Card.Img
          variant="top"
          className="border-black"
          src={book?.volumeInfo?.imageLinks?.smallThumbnail}
        />
        <Card.Header>{book?.volumeInfo?.title}</Card.Header>
        <Card.Body>
          <h4 className="card-title">{book?.volumeInfo?.title} </h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Body>
      </Card>
    </>
  )
}

export default CustomCard
