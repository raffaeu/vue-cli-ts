import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import HomeComponent from './components/Hello.vue'
import ErrorComponent from './components/Error404.vue'

Vue.use(VueRouter)

const routeOptions = <VueRouter.RouterOptions>{
  routes: [
    { path: '/', component: HomeComponent },
    { path: '*', component: ErrorComponent }
  ]
}
export const AppRouter = new VueRouter(routeOptions)

export default AppRouter