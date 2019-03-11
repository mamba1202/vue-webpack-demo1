import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(router)
//配置路由
export default new router({
    routes: [{
        path: '/helloworld',   //指定要要跳转的路径
        component: HelloWorld //指定要跳转的组件
    },
    {
        path: '/helloearth',   //指定要要跳转的路径
        component: HelloEarth //指定要跳转的组件
    }]
}) 