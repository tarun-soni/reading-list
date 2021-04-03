import axios from 'axios'

// const registerUser = (formData) => {}

const logoutUser = async () => {
  localStorage.removeItem('userToken')
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
    console.log('userlogindata :>> ', data)

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

export { loginUser, logoutUser, getUserById }
