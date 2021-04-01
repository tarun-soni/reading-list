import axios from 'axios'

const registerUser = (formData) => {}

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
export { loginUser }
