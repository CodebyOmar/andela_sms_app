<template src="./allStudents.html">
  
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
  name:"allStudents",
  created:function(){ return this.getStudents() },
  computed:{
    ...mapGetters(["allStudents"])
  },
  methods:{
    ...mapActions({
      getStudents:"getStudents"
    })    
  }
}
</script>
