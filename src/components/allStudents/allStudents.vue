<template src="./allStudents.html">
  
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import mainTab from "@/components/tab/mainTab"
import FadeLoader from "../../../node_modules/vue-spinner/src/FadeLoader"

export default {
  name:"allStudents",
  created:function(){ return this.getStudents() },
  data(){
    return {
      loading:true
    }
  },
  computed:{
    ...mapGetters(["allStudents"])
  },
  methods:{
    ...mapActions({
      getStudents:"getStudents"
    })    
  },
  components:{mainTab,FadeLoader}
}
</script>
