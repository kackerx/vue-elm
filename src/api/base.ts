import axios          from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({ baseURL: '/api' })

instance.interceptors.response.use((resp) => {
    const { data: _data } = resp
    const { data, code, msg } = _data
    if (code !== 0) {
        showDialog({ message: 'error' }).then(r => {
        })
        return Promise.reject(msg)
    }
    return data
})

export default instance