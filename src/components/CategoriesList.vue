<template>
  <div class="listCategor">
    <span  v-for="product in products"
          :key="product.brand" >
        {{product.brand}}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    products: Object
  }
}
</script>

<style >
  .listCategor{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span{
    margin-bottom:5px;
    width: 80%;
    text-align: center;
    display: block;
    padding: 10%;
  }
</style>