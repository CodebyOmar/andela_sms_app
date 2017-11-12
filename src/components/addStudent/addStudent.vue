<template src="./addStudent.html">
  
</template>

<script>
import resource from "./resource"
import {mapActions,mapGetters} from "vuex"
import mainTab from "@/components/tab/mainTab"

export default {
  name:"AddStudent",
  data () {
    return {
      faculties: resource.faculties,
      depts: new Array(),
      courses: new Array(),
      student:{
        fname:"",
        lname:"",
        dob:"",
        regnum:"",
        level:"",
        faculty:"",
        department:"",
        cos:""
      },
      isLoading:false,
      error: "",
      validated: false
    }
  },
  computed:{
    disable_depts() { return this.depts.length === 0 },
    disable_course() { return this.courses.length === 0 },
    ...mapGetters(["create_status"])
  },
  methods: {
    ...mapActions(["addStudent"]),  

    getDepts () {
      const depts = resource.departments
      const selected_fclty = this.student.faculty

      if(selected_fclty != ""){
        this.depts = depts[selected_fclty]
      }else {
        this.depts = new Array()
      }
    },

    getCourses () {
      const courses =resource.courses
      const selected_dept = this.student.department

      if(selected_dept != ""){
        this.courses = courses[selected_dept]
      }else{
        this.courses = new Array()
      } 
    },

    addNewStudent() {
      //const {f:fname,l:lname,d:dob,r:regnum,lv:level,sf:selected_faculty,sd:selected_dept,sc:selected_course} = this.student
      const _keys = ["fname","lname","dob","regnum","level","faculty","department","cos"]
      const student = this.student
      this.isLoading = true
      let sc = 0, ec = 0;

      _keys.forEach(function(_key) {
        if(student.hasOwnProperty(_key) && student[_key] != ""){
          sc++
        }else{
          ec++
        }
      }, this);

      if(ec > 0){
        this.isLoading = false
        this.error = "You can't submit an empty form."
      }else if(ec === 0){
        this.addStudent(this.student)
        this.validated =true
        this.isLoading = false
      }
    }
  },
  components:{mainTab}
}
</script>
