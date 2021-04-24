import React from 'react'
import { Card } from 'react-bootstrap'
import ReadMoreAndLess from 'react-read-more-less'

import { LinkContainer } from 'react-router-bootstrap'
import { AddBookBtn } from './AddBookBtn.js'
import RemoveBookBtn from './RemoveBookBtn.js'
const CustomCard = ({
  title,
  bookId,
  img,
  description,
  previewLink,
  categories,
  fromMyList
}) => {
  return (
    <>
      <Card className="m-3 " style={{ width: '20rem' }}>
        <Card.Header className="p-3 d-flex">{title}</Card.Header>

        <div
          className="d-flex p-3 align-center justify-content-center"
          style={{ height: '15rem' }}
        >
          {img ? (
            <Card.Img
              className="border-black"
              style={{ width: 'auto' }}
              src={img}
            />
          ) : (
            <NoImageSVG />
          )}
        </div>

        <Card.Body>
          <div className="card--desc">
            {description != null ? (
              <ReadMoreAndLess
                className="read-more-content"
                charLimit={120}
                readMoreText="  Read more"
                readLessText="  Read less"
              >
                {description}
              </ReadMoreAndLess>
            ) : (
              'No description available'
            )}
          </div>
        </Card.Body>

        <Card.Body
          className="d-flex align-items-center justify-content-between"
          style={{ height: '3rem' }}
        >
          <button type="button" className="btn btn-primary btn-sm">
            <Card.Link
              target="_blank"
              href={previewLink}
              className="text-white"
            >
              Preview link
            </Card.Link>
          </button>

          <button type="button" className="btn btn-outline-secondary btn-sm">
            <LinkContainer to={`/book/${bookId}`} className="text-black-50">
              <Card.Link>More Info</Card.Link>
            </LinkContainer>
          </button>

          {!fromMyList ? (
            <AddBookBtn
              bookId={bookId}
              title={title}
              description={description}
              imageUrl={img}
            />
          ) : (
            // <></>
            <RemoveBookBtn bookId={bookId} />
          )}
        </Card.Body>

        <Card.Footer className="text-muted">
          {categories?.map((c, index) => (
            <p key={index}> Categories: {c}</p>
          ))}
        </Card.Footer>
      </Card>
    </>
  )
}

export default CustomCard

const NoImageSVG = () => {
  return (
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
  )
}
