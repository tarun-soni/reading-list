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

    // if (data) return data
    // else return null
  } catch (error) {
    console.log('error :>> ', error)
  }
}
