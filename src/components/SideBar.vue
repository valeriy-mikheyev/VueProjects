<template>
  <div class="CategoryList">
    <CategoriesList
      :products="products"
      @delite-emit="$emit('delite-items', $event)"
     />
     <input type="text">
     <button class="pushButton">Add</button>
  </div>
</template>

<script>
import CategoriesList from  './CategoriesList.vue'
export default {
  props:{
    products: Array
  },
  components :{
    CategoriesList
  }
}
</script>

<style>
  .CategoryList{
    width: 10%;
  }
  input[type="text"] {
    margin-top:10px;
   border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px;
   -moz-border-radius: 3px;
   -khtml-border-radius: 3px; 
   background: #ffffff !important;
   outline: none; 
   height: 24px; 
   width: 120px; 
   color: #cccccc; 
   font-size: 15px; 
   font-family: Tahoma; 
}
input[type="text"]:focus {
  color: #000000;
  border: 1px solid #000000
}
.pushButton{
  width: 60px;
  font-size: 15px;
  margin-left:5px;
  border: 1px solid #cccccc; 
  border-radius: 3px; 
  height: 28px; 
  text-align: center;
  cursor: pointer;
}
button ,input:focus {
  outline: none;
}
</style>