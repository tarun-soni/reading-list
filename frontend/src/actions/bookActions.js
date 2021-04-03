import axios from 'axios'
export const addBook = async (bookData) => {
  try {
    // todo add bearer token
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.post(`/api/book`, bookData, config)
    console.log('bookData response :>> ', response)

    if (response?.status === 201) {
      return 'success'
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}

export const getUserBooks = async (user_id) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.get(`/api/book/user/${user_id}`, config)
    console.log('bookData response :>> ', response)

    if (response?.status === 200) {
      return response.data
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}

export const deleteBook = async (book_id) => {
  try {
    console.log('book_id :>> ', book_id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.delete(`/api/book/${book_id}`, config)
    console.log('bookData response :>> ', response)

    if (response?.status === 200) {
      return 'success'
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}
