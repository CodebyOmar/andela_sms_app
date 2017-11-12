<template src="./students.html">
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader"
  export default {
    name:"students",
    created: function () { return this.getStudents() },
    data () {
      return {
        loading:true
      }
    },
    computed:{
      ...mapGetters(['allStudents'])
    },
    methods: {
      ...mapActions({getStudents:"getStudents",deleteStudent:"deleteStudent"}),
      async delStudent(regnum){
        this.deleteStudent(regnum)
        return this.getStudents()
      }
    },
    components:{FadeLoader}
  }
</script>