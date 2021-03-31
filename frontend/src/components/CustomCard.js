import React from 'react'
import { Card } from 'react-bootstrap'
const CustomCard = ({ book }) => {
  return (
    <>
      {console.log('book :>> ', book)}
      <Card className="m-3 " style={{ maxWidth: '20rem' }}>
        <Card.Header className="p-3">{book?.volumeInfo?.title}</Card.Header>

        <div
          className="d-flex p-3 align-center justify-content-center"
          style={{ height: '15rem' }}
        >
          {book?.volumeInfo?.imageLinks.smallThumbnail ? (
            <Card.Img
              className="border-black"
              style={{ width: 'auto' }}
              src={book?.volumeInfo?.imageLinks?.smallThumbnail}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="d-block user-select-none"
              width="100%"
              height="200"
              aria-label="Placeholder: Image cap"
              focusable="false"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 318 180"
              style={{ fontSize: '1.125rem', textAnchor: 'middle' }}
            >
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                No Image
              </text>
            </svg>
          )}
        </div>

        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <a href="#/" className="card-link">
            Card link
          </a>
          <a href="#/" className="card-link">
            Another link
          </a>
        </Card.Body>

        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      {/* <div class="card" style={{ width: '18rem' }}>
        <Card.Img
          className="border-black p-3 align-self-center"
          style={{ width: 'auto', minHeight: '10rem' }}
          src={book?.volumeInfo?.imageLinks?.smallThumbnail}
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div> */}
    </>
  )
}

export default CustomCard
