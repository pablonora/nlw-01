import axios from 'axios'
import config from '../config/config'

const api = axios.create({
  baseURL: `http://${config.server_address}:${config.server_port}`
})

export default api