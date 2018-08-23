import Engine from 'store/src/store-engine'
import SessionStorage from 'store/storages/sessionStorage'
import DefaultPlugin from 'store/plugins/defaults'
import ExpirePlugin from 'store/plugins/expire'

let plugins = [DefaultPlugin, ExpirePlugin]

// 使用store用来存储token
let sessionStorage = Engine.createStore([SessionStorage], plugins)

let token = {
  store: sessionStorage,
  key: 'auth_token',
  // token方进data中
  data: {},

  /**
   * 写入token方法
   * type  token类型，我们使用的是Bearer
   * access token值
   * refresh 刷新token
   * expires 有效期，单位秒
   * return obj
   */
  set: (type, access, refresh = '', expires = 999999) => {
    this.a.data = {
      type: type,
      access: access,
      refresh: refresh,
      expires: expires
    }
    this.a.store.set(this.a.key, this.a.data, new Date().getTime() + (1000 * parseInt(expires, 10)))
    return this.a
  },

  /**
   * 读取token data数据
   * return obj
   */
  get: () => {
    console.log(this)
    this.a.data = this.a.store.get(this.a.key)
    return this.a
  },

  /**
   * 获取header需要的token格式
   * return string
   */
  getAuthAccess: () => {
    let data = this.a.data
    return data ? data.type + ' ' + data.access : ''
  },

  /**
   * 清除token
   */
  forget: () => {
    this.a.store.remove(this.a.key)
  }
}

export default token
