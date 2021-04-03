import axios from 'axios'
export const addBook = async (bookData) => {
  try {
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
