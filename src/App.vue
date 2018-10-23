<template>
  <div class="app">
    
    <!-- <add-blogc></add-blogc> -->
    <!-- <show-blog></show-blog> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import add from './components/addblogabc'
  import  showblogs from './components/showblogs'
  import BlogHeader from './components/BlogHeader'

export default {
  name: 'Apps',
  data(){

  },
  components:{
    "add-blogc":add,
    "show-blog":showblogs,
    "blog-header":BlogHeader


  }
}
</script>

<style>

</style>
