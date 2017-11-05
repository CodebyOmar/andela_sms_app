<template src="./mainTab.html">
  
</template>

<script>
export default {
  name:"mainTab",
  mounted:function () { return this.checkPresentRoute() },
  data () {
    return {
    route : {
      isRegisterActive:false,
      isViewStudentActive:false
    } 
    }
  },
  methods: {
    checkPresentRoute() {
      let path = window.location.pathname.split("/",3)
      let currentRoute = "/"+path[1]
      let newState = {'isRegisterActive':false, 'isViewStudentActive':false}

      switch(currentRoute){
        case "/":
          newState.isRegisterActive = true
          this.route = newState
          break;
        case "/allstudents":
          newState.isViewStudentActive = true
          this.route =  newState
          break;  
        default:
          this.isRegisterActive = true
          break;
      }
    }
  }
}
</script>
