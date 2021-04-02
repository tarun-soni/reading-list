import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'

// @desc    Create a book
// @route   POST /api/book
// @access  Private
const createBook = asyncHandler(async (req, res) => {
  const { user, title, description, imageUrl, bookId } = req.body
  console.log('req.body :>> ', req.body)
  const book = new Book({
    user: user._id,
    title,
    description,
    imageUrl,
    bookId
  })

  const createdBook = await book.save()
  res.status(201).json(createdBook)
})

export { createBook }
