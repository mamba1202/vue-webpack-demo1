//vue组件存放
<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.worldmsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  color: blue
}
</style>
