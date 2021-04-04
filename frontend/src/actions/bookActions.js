import axios from 'axios'
export const addBook = async (bookData) => {
  try {
    // todo add bearer token
    const token = localStorage.getItem('userToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.post(`/api/book`, bookData, config)

    if (response?.status === 201) {
      return 'success'
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}

export const getUserBooks = async (user_id) => {
  try {
    const token = localStorage.getItem('userToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get(`/api/book/user/${user_id}`, config)

    if (response?.status === 200) {
      return response.data
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}

export const deleteBook = async (book_id) => {
  try {
    const token = localStorage.getItem('userToken')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.delete(`/api/book/${book_id}`, config)

    if (response?.status === 200) {
      return 'success'
    } else return 'failed'
  } catch (error) {
    console.log('error :>> ', error)
  }
}
