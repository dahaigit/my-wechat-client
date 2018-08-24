<template>
  <div>
    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4aebe20c12f506a3&redirect_uri=http%3A%2F%2Fwechat.subprice.cn%2F%23%2Flogin&response_type=code&scope=snsapi_userinfo&state=bc17befd6d5060f16de95e38f6eaf69c&connect_redirect=1#wechat_redirect">登陆</a>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        "code": "",
        "state": ""
      }
    },
    created: function(){
      // 获取code，用code换取token
      this.code = this.$util.getQueryString('code')
      if (this.code) {
        this.$http.get('api/login?code=' + this.code).then(response => {
          let data = response.data.meta
          this.$token.set(data.access_token)
          window.location.href = '/'
        })
      } else {
        // 发起授权
        let redirectUrl = encodeURIComponent('http://wechat.subprice.cn/#/login')
        let oAuthUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4aebe20c12f506a3&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=bc17befd6d5060f16de95e38f6eaf69c&connect_redirect=1#wechat_redirect`
        window.location.href = oAuthUrl
      }
    }
  }
</script>

