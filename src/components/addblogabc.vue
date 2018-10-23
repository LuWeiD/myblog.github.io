<template>
  <div class="my-blog">
    <h2>添加博客</h2>
    <form v-if="blog.submitted">
      <label>博客标题:</label>
      <input type="text" v-model="blog.title">
      <label>博客内容:</label>
      <textarea v-model="blog.contents"></textarea>

      <div id="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" v-model="blog.categorys" value="Vue.js">
        <label>Node.js</label>
        <input type="checkbox" v-model="blog.categorys" value="Node.jds">
        <label>React</label>
        <input type="checkbox" v-model="blog.categorys" value="React.js">
        <label>Angular4</label>
        <input type="checkbox" v-model="blog.categorys" value="Angular4.js">
      </div>
      <label>作者：</label>
      <select v-model="blog.authorName">
         <option v-for="author in blog.authors">{{author}}</option>
      </select>
      <div id="button">
         <button v-on:click.prevent="post">发表博客</button>
      </div>
    </form>



     <hr>
      <h2 v-if="!blog.submitted">您的博客发布成功</h2>
      <p2>博客标题:{{blog.title}}</p2><br>
      <p2>博客内容:{{blog.contents}}</p2><br>
      <p2>博客分类:</p2>
      <ul>
        <li v-for="category in blog.categorys">
        {{category}}
        </li>
      </ul>
      <div id="author">作者:{{blog.authorName}}</div>
  </div>
</template>

<script>
export default {
    name: 'hw',
    data(){
       return {
          blog:{
            title:"",
            contents:"",
            categorys:[],
            authors:["卢伟东","高艺畅"],
            authorName:"",
            submitted:true,
            xingmgin:"as"
     
          }
        }
    },
    // jsonplaceholder.typicode.com
    methods:{
      post:function(){
        this.$http.post("https://wd6439573863iggxjt.wilddogio.com/私人文件.json",this.blog)
        .then(function(data){
          console.log(data);
          this.blog.submitted=false
        });
    }
  }
}


</script>

<style scoped>
.my-blog{
  width:800px;
  padding-left:200px;
}
#my-blog *{
  box-sizing:border-box;
}
#my-blog{
  margin:20px auto;
  max-width:600px;
  padding:20px;
}
input[type="text"]{
  display: block;
  width:100%;
  height:25px;
  size:25px;
}
label{
  display: block;
  margin:10px;
  margin-left: 0px;
}
textarea{
  display: block;
  width: 100%;
  height:200px;
}
#checkboxes label{
  display:inline-block;
  margin:0px;
  margin-top:10px;
  margin-left: 10px;
}
#checkboxes input{
  display:inline-block;
  margin:0px;
}
select{
  display: block;
  width:100%;
  height:30px;
}
#button{
  display: block;
  width:100%;
  margin:10px;
  padding-left:90%;
}
button{
  display: inline-block;
  padding:8px;
  border-radius: 9px;
  background:crimson;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
p2,ul{
  display: block;
  margin:10px;
}
#author{
  padding:20px;
  padding-left:9px;
}

</style>
