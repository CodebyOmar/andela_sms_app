<template src="./profile.html">
</template>

<script>
import mainTab from "@/components/tab/mainTab"

  export default {
    name:"studentProfile",
    props:["student"],
    computed: {
      student_ () {
        let res = JSON.parse(this.student);
        return res
      }
    },
    methods:{
      goBack(){
        return window.history.back()
      }
    },
    components:{mainTab}
  }
</script>