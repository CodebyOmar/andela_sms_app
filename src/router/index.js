import Vue from 'vue'
import Router from 'vue-router'
import addStudent from "@/components/addStudent/addStudent"
import allStudents from "@/components/allStudents/allStudents"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:"AddStudent",
      component: addStudent
    },
    {
      path:"/allstudents",
      name:"AllStudents",
      component: allStudents
    }
  ]
})
