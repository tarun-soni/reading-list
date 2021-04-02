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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.get(`/api/users/${id}`, config)
    console.log('user :>> ', response)

    // if (data) return data
    // else return null
  } catch (err) {
    console.log('err :>> ', err)
  }
}

export { loginUser, logoutUser, getUserById }
