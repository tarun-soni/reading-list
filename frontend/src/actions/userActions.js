import axios from 'axios'

const registerUser = async (name, email, password) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      `/api/users`,
      { name, email, password },
      config
    )

    if (data) return data
    else return null
  } catch (err) {
    console.log('err :>> ', err)
  }
}

const logoutUser = async () => {
  localStorage.removeItem('userToken')
  localStorage.removeItem('userId')
}
const loginUser = async (email, password) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    )

    if (data) return data
    else return null
  } catch (err) {
    console.log('err :>> ', err)
  }
}

const getUserById = async (id) => {
  const token = localStorage.getItem('userToken')
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const { data } = await axios.get(`/api/users/${id}`, config)

    if (data) return data
    else return null
  } catch (err) {
    console.log('err :>> ', err)
  }
}

export { loginUser, logoutUser, getUserById, registerUser }
