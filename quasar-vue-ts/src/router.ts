import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/Main.vue'
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