<template>
	<div class="lefts">
		<router-link tag="div" class="box" :to='{path:"/contpage",query:{cont:i.content}}' v-for='i in bokedata'>
		<!-- <div class="box" > -->
			<h1>{{i.article_name}}</h1>
			
				<p id="boke_conts">内容：{{i.content}}</p>
			
			<p>时间：{{i.time}}</p>
		</router-link>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				blogdata:[]
			}
		},
		 props:["bokedata"],
		created(){
			// this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then((data)=>{
			// 	console.log(data.data.data);
			// 	this.blogdata=data.data.data
				// this.blogdata.content=this.blogdata.content.replace("/</?[p|P][^>]*>/","")

				// console.log(this.blogdata.content);
			// })
		}
	}
</script>
<style>
	.lefts{
		width:1020px;
		height:500px;
		margin-left:120px;
		float: left;
	}
	.box{
		width:220px;
		height:200px;
		border:1px solid #48576a;
		float: left;
		margin:10px 10px;
		border-radius: 8px;
		cursor:pointer;
	}
	.box h1{
		width:230px;
		padding:10px 0px;
		text-align: center;
	}
	.box p{
		padding:10px 0px;
		text-align: center;
		color:#48576a;
	}
</style>