import express from 'express'
import { createBook, getUserBooks } from '../controllers/bookController.js'
const router = express.Router()
router.route('/').post(createBook)
router.route('/user/:user_id').get(getUserBooks)
export default router
