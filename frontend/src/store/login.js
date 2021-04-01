import { atom } from 'recoil'

export const userLoginState = atom({
  key: 'userLoginState',
  default: {
    isAuthenticated: false,
    token: null
  }
})
