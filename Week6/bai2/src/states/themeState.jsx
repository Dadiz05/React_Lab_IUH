import { atom } from 'recoil'

const themeState = atom({
  key: "themeState",
  default: localStorage.getItem('theme') || 'light'
})

export default themeState