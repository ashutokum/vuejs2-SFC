
<template>
	
	<li> {{title}} <input type="button" value="Remove" class="deletebtn" v-on:click="deleteHandler"> </li>

</template>

<script>
export default {

		name: "TodoItem",
		data(){
			return {

			}
		},
		props: {
	        title: {
	            type: String,
	            default: "Defaut Noting to show!"
	        	}
    	},
    	methods: {
    		deleteHandler(e){
    			alert(e)

    			//alert(this.title) // return props value

    			//var cv = e.target.innerHTML.trim();
    			var rootInstance;
    			if( rootInstance = this.$parent ){

    				var indexTo = rootInstance.todolists.indexOf(this.title);
    				//alert(indexTo)

    				console.log("index of this data is : " + indexTo)

    				var rem = rootInstance.todolists.splice(indexTo, 1); //
    				
    			}else {

    				//rooInstance = this.$parent;
    				 
    			}

    			console.log( rootInstance)



    			console.log( this.$root + "  " + this.$parent)

    		}
    	}
}
</script>

<style scoped>
	
li{
  padding: 12px;
}
.deletebtn{
  float: right;
  margin-right: 20px;
}

</style>

<custom1>
	When you use style with attribute scropt it only applied to this components elements only. [[[great]]]
</custom1>