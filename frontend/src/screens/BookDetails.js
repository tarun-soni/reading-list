import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState()

  useEffect(() => {
    async function getData() {
      //www.googleapis.com/books/v1/volumes/f280CwAAQBAJ
      const url = `https://www.googleapis.com/books/v1/volumes/${id}`

      const resp = await axios.get(url)
      setBook(resp?.data)
    }
    getData()
  }, [id])
  return (
    <>
      {console.table(`book`, book)}
      <div>
        {book?.volumeInfo?.title}
        {book?.volumeInfo?.subtitle}
      </div>
    </>
  )
}

export default BookDetails
