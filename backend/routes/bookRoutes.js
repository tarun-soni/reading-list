import express from 'express'
import {
  createBook,
  deleteBook,
  getUserBooks
} from '../controllers/bookController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protect, createBook)
router.route('/:book_id').delete(protect, deleteBook)
router.route('/user/:user_id').get(protect, getUserBooks)
export default router
