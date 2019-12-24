<template>
  <div class="ProductContainer">
    <ProductCard 
    :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components:{
  ProductCard
  },
  props:{
    product:Array
  }
}
</script>

<style >
  .ProductContainer{
    width: 90%;
    display: flex;
  }
</style>