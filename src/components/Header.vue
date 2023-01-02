
<template>
    <header> 
        <h1>  {{title}} </h1>
    </header>
</template>

<script>
//Whatever you want to import here. import

export default {
  name : "Header",
  data() {
    return {
     
    }
  },
  props: {
        title: {
            type: String,
            default: "TODO List App"
        }
    },
    mounted() {
        console.log(this.name);
    }
}
</script>


<style scoped>
    footer{
        margin: 10px auto;
    }
</style>