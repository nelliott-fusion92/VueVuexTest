import axios from 'axios'

const ChuckClient = axios.create({
  baseURL: 'https://api.chucknorris.io/',
  timeout: 5000,
  headers: {},
})

export { ChuckClient }
