import Vue from 'vue'
import Router from 'vue-router'
import addStudent from "@/components/addStudent/addStudent"
import allStudents from "@/components/allStudents/allStudents"
import studentProfile from "@/components/studentProfile/profile"
import admin from "@/components/admin/students/students"
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
    },
    {
      path:"/allstudents/profile/:student",
      name:"Student profile",
      component: studentProfile,
      props:true
    },
    {
      path:"/sms/admin",
      name:"admin",
      component: admin
    }
  ]
})
