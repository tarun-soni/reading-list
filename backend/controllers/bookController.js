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
    console.error('error getUserBooks route: >>>>>', err)
    res.status(500).send('Server Error')
  }
})

// @route       DELETE api/book/:book_id
// @desc        delete specific bok
// @access      private
const deleteBook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.book_id })
    if (book) {
      await book.remove()
      res.json({ message: 'Book removed' })
    } else {
      res.status(404).send({ message: 'Book Not Found' })
    }
  } catch (err) {
    console.error('error in route post delete book ', err)
  }
})

export { createBook, getUserBooks, deleteBook }
