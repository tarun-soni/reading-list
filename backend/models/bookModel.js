import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Book = mongoose.model('Book', bookSchema)

export default Book
