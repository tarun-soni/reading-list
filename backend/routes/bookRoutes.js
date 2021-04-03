import express from 'express'
import {
  createBook,
  deleteBook,
  getUserBooks
} from '../controllers/bookController.js'
const router = express.Router()
router.route('/').post(createBook)
router.route('/:book_id').delete(deleteBook)
router.route('/user/:user_id').get(getUserBooks)
export default router
