<template>
  <div class="CategoryList">
    <CategoriesList
      :products="products"
     />
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
</style>