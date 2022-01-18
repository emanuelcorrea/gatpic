import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UxtkXk2iE_djYtYGehVSWRAtGeP-Z31qhtvnwTlRNM8'
  }
})
