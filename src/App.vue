
<template>
  <div>
   
  <section>
        <Header title="TODO List App"/>
  </section>
   

  <section>

    <div> 
      <input type="text" id="" id="todoTextEl"> 
      <input type="submit" value="Add" id="submit" v-on:click="click">
    </div>

    <br >

    <div>
       <ol>
         <!-- <li v-for="todo in todolists" v-bind:key="todo"> 
            {{todo}} <button class='deletebtn' v-on:click="deleteItem">Delete</button>
         </li> -->
         <TodoItem v-for="todo in todolists" v-bind:key="todo" v-bind:title="todo"/>
       </ol>
    </div>


  </section>
  
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TodoItem from './components/TodoItem.vue';
import store from 'store';

export default {
  name: 'App',
  components: {
    Header,
    TodoItem
  },
  data() {
    return {
      msg: '`Hello world` from App.vue',
      todolists : []
    }
  },
  methods: {
    deleteItem : (e)=>{


      // var el = e.target.parentElement;

      // alert(el.innerHTML);

    },
    click : function (e) {
      //INFO: `this` is current vue instance
      //`e` click event
      try{
        // console.info( e );
        // console.info(this);
      }catch( e ){
      }
    
      var todoTextEl = document.getElementById('todoTextEl');

        // this.$data is reactive
        // update the list with new entry 

       this.$data.todolists.push( todoTextEl.value.trim() );

    },
    setUp : function (){

      console.log(store);

      console.log( store.get('liststore'));

      if( store.get('liststore') == undefined ){

      store.set('liststore', ['Upload video on youtube.', 'Learn some programming tips.', 'Write email to school for leave.']);

    }else {

      this.$data.todolists = store.get('liststore');
      
    }


      

    }
  },
  created(){ // fired 1s
  
    console.log("this message from App.vue : event created ");
    
  },

  mounted(){ // fired 2s
  console.log("this is from App.vue : event mounted ");

        this.setUp();
  },

  watch : { // watch should be object not function

    todolists : (newdata, olddata) =>{

        console.log( newdata, olddata );

        store.set('liststore', newdata);


      
    }
  }
  
}
</script>

<style scoped>
.example{
    color: green;
}

</style>

<custom1>
  Whenever you import a components to page, must specify in (components); Only access throught that ** remember **
<custom1>
