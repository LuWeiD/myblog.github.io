<template>
	<div>
		<div id="single-blog">
			<h1>{{blog.title}}</h1>
			<article>{{blog.contents}}</article>
			<p>作者:{{blog.author}}</p>
			<p>分类:</p>
			<ul>
				<li v-for="category in blog.categorys">
					{{category}}
				</li>
			</ul>
			<div>
			    <button v-on:click="deleteblog" >删除</button>
			    <router-link :to="'/editblog/'+id">
			        <button>编辑</button>
			    </router-link>
		    </div>
		</div>

	</div>
</template>
<script>
	 export default{
	 	name:'singleblog',
	 	data(){
	 		return {
	 			id:this.$route.params.id,
	 			blog:{}

	 	    }
	    },
	    created(){
	    	this.$http.get('https://wd6439573863iggxjt.wilddogio.com/私人文件/'+this.id+".json")
	    	.then(function(data){
	    	    return data.json();
	    		})
	    	.then(function(data){
	    		this.blog=data; 
	    		console.log(this.id)             
	    	})  	
	    },
	    methods:{
	    	deleteblog(){
	    		this.$http.delete("https://wd6439573863iggxjt.wilddogio.com/私人文件/"+this.id+".json")
	    		.then(response=>{
	    			this.$router.push({path:'/show'});}) 
	    			},
        }
}


	
	 //https:jsonplaceholder.typicode.com/post/
</script>
<style scoped>
#single-blog{
	margin:100px;
	padding-left:50px;
	padding-right: 50px ;
}
</style>