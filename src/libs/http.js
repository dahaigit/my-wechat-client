import Axios from 'axios'
import { MessageBox } from 'element-ui'
import Token from './token'

let http = Axios.create({
    baseURL: process.env.BASE_URL,
    accept: 'application/json',
    timeout: 30000
})

// 拦截请求，加入token
http.interceptors.request.use(
    config => {
        // 在发送请求头加入auth_token
        config.headers['Authorization'] = Token.get().getAuthAccess()
        return config
    }, function (error) {
        // 网络请求失败reject
        return Promise.reject(error)
    }
)

// 拦截响应，处理错误
http.interceptors.response.use(
    response => {
        return response
    },
    err => {
        let responseStatusCode = ''
        try {
            responseStatusCode = err.response.status
        } catch (err) {
            MessageBox.alert('网络错误，请稍后重试！')
            return Promise.reject(err)
        }
        switch (responseStatusCode) {
            case 403:
            case 401:
                Token.forget()
                MessageBox.confirm('登录令牌失效，请重新登录？', '提示', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '待在原地',
                    type: 'warning'
                }).then(() => {
                    window.location.reload()
                })
                break
            case 500:
                return Promise.reject(err.response.data.msg)
            default:
                return Promise.reject(err)
        }
    }
)

export default http