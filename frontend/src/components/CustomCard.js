import React from 'react'
import { Card } from 'react-bootstrap'
import ReadMoreAndLess from 'react-read-more-less'
import { Link } from 'react-router-dom'

const CustomCard = ({ book }) => {
  return (
    <>
      <Card className="m-3 card-hover" style={{ maxWidth: '20rem' }}>
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
          <div className="card--desc">
            {book?.volumeInfo.description != null ? (
              <ReadMoreAndLess
                className="read-more-content"
                charLimit={120}
                readMoreText="  Read more"
                readLessText="  Read less"
              >
                {book?.volumeInfo?.description}
              </ReadMoreAndLess>
            ) : (
              'no desc'
            )}
          </div>
        </Card.Body>
        <Card.Body>
          <Card.Link
            target="_blank"
            href={book?.volumeInfo?.previewLink}
            className="card-link"
          >
            Preview link
          </Card.Link>
          <Card.Link className="card-link">
            <Link to={`/book/${book.id}`}>More Info</Link>
          </Card.Link>
        </Card.Body>

        <Card.Footer className="text-muted">
          {book?.volumeInfo?.categories?.map((c) => (
            <p> Categories: {c}</p>
          ))}
        </Card.Footer>
      </Card>
    </>
  )
}

export default CustomCard
