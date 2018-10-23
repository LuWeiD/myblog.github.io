<template>
	<div id="blog">
		<h1>博客总览</h1>
		<div id="input">
			<input type="text" placeholder="搜索" v-model="message">
		</div>
	    <div v-theme="'wide'" id="show-blogs">  
		    <div v-for="blog in searchmessage" class="single-blog">
          <router-link v-bind:to="'/blog/'+ blog.id">

			      <h2 v-rainbow>{{blog.title|filterA}}</h2>

			      <article>{{blog.contents}}</article>

          </router-link>
		   </div>	
	    </div>
	</div>
	
</template>
<script>
  export default{
  	name:"app",
  	data(){
  		return{
  			blogs:[],
  			message:""
  		}
  	},
  	created(){
  		this.$http.get('https://wd6439573863iggxjt.wilddogio.com/私人文件.json')
      .then(function(data){
        //console.log(data)
  			return data.json();
  		})
      .then(function(data){
        var blogsarray=[];
        for( let key in data){
          //console.log(data[key]);
          data[key].id=key;
          blogsarray.push(data[key]); 
        }
        this.blogs=blogsarray;
        console.log(this.blogs)
      })
  	},
  	filters:{
  		filterA(message){
  			return message.toUpperCase();
  		}
  	},
  	computed:{
  		searchmessage:function(){
            return this.blogs.filter((element)=>{
            	return element.title.match(this.message);//返回一个匹配的数组(不会被判定为false)，若不匹配则返回null(会被判定为false)
            })
  		}
  	}
  	
  }
	
</script>
<style scoped>
#blog{
	margin:100px;
}
h1{
	display: block;
	text-align: center;
}
#input{
	text-align:center;
}
input{
	width:800px;
	height:20px;
}
#show-blogs{
	/*max-width: 800px;*/
	margin:0 auto;
}
.single-blog{
	padding:20px;
	background:#eee;
	margin:20px 0;
	box-sizing:border-box;
}
</style>