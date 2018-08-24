<template>
  <div>
    授权结果页面
  </div>
</template>
<script>

  export default {
    data: {},
    created: function(){
      this.goToAuth()
    },
    methods: {
      goToAuth: function () {
        let params = this.$route.query.code
        console.log(params)
      }
    },
  }
</script>
