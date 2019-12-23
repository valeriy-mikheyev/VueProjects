<template>
  <div class="CategoryList">
    <CategoriesList
      :products="products"
      @delite-emit="$emit('delite-items', $event)"
     />
     <input  type="text" v-model="categoryText"  placeholder="Write ur category">
     <button class="pushButton" @click="newCategory()">Add Category</button>
  </div>
</template>

<script>
import CategoriesList from  './CategoriesList.vue'
export default {
  data(){
    return{
      categoryText: ''
    };
  },
  props:{
    products: Array
  },
  components :{
    CategoriesList
  },
  methods: {
    newCategory(){
      if(this.categoryText.length > 0){
        const newCategory = this.categoryText
        this.$emit('create-category', newCategory)
      }
    this.categoryText= '';
    }
  },
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
  margin-top:5px;
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