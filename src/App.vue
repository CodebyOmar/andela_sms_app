<template>
  <div id="app">
    <navbar/>
    <section class="section">
      <div class="container columns">
        <span class="column is-one-quarter"></span>

        <span class="column">
          <main-tab/>
          <div class="card" style="margin-top:-25px">
            <router-view/>
          </div>
        </span> 

        <span class="column is-one-quarter"></span> 
      </div>
    </section>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
import mainTab from '@/components/tab/mainTab'

export default {
  name: 'app',
  components:{navbar,mainTab}
}
</script>

<style lang="sass"> @import "./assets/styles/app.scss"; </style>
<style src="./assets/styles/app.css"></style>
<style src="./assets/styles/font-awesome.min.css"></style>