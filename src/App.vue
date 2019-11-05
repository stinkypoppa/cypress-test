<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{message}} hej</p>
    <input placeholder="Name: " v-model="name"/>
    <input placeholder="Address: " v-model="address"/>
    <button v-on:click="validate">Ok</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }, data: function(){
    return {
      name: '',
      address: '',
      message: ''
    }
  }, methods: {
    validate() {
      try {
        this.validateName();
        this.validateAddress();
        this.message = "All ok";
      } catch(err){
        this.message = err.message;
      }
    },
    validateName() {
      if(this.name==='')
        throw new Error("Name is missing");
    },
    validateAddress() {
      if(this.address==='')
        throw new Error("Address is missing");
    }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
