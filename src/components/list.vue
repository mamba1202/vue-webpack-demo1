<template>
<ul>
<li>
<router-link :to="{name:'helloworld',params:{worldmsg:'休斯顿火箭队'}}">HelloWorld</router-link>
</li>
<li>
<router-link :to="{name:'helloearth',params:{earthmsg:'湖人队'}}">HelloEarth</router-link>
</li>
</ul>
</template>
<script>
    export default{
       name: "list"
}
</script>

<style scoped>
maigin: 10px;
</style>