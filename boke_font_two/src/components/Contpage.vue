<template>
	<div class="dvs">
		<div class="conts">
			<h2>文章内容</h2>
			{{this.data}}
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Contpage',
		data(){
			return{
				data:""
			}
		},
		created(){
			this.data=this.$route.query.cont
		}
	}
</script>
<style scoped>
	.dvs{
		width:1000px;
		height:970px;
		margin:auto;
		background: url("../img/timg.jpg") no-repeat;
  		background-size:100% 100%;
	}
	.conts{
		width:300px;
		height:300px;
		line-height:200px;
		text-align: center;
		margin:auto;
		font-size:20px;
	}
</style>