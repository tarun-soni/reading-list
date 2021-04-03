import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'

// @desc    Create a book
// @route   POST /api/book
// @access  Private
const createBook = asyncHandler(async (req, res) => {
  const { user, title, description, imageUrl, bookId } = req.body
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

// @desc    get user books
// @route   GET /api/book/user/:user_id
// @access  Private
const getUserBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find({
      user: req.params.user_id
    }).populate('user', ['name'])

    if (!books) {
      return res.status(400).send({ msg: 'NO Books Found' })
    } else {
      res.json(books)
    }
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).send({ msg: 'Books Not Found' })
    }
    console.error('error in note GET BOoks route: >>>>>', err)
    res.status(500).send('Server Error')
  }
})
export { createBook, getUserBooks }
