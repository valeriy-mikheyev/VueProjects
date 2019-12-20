<template>
  <div class="listCategor">
    <span  v-for="(product, index) in products"
          :key="product.brand"
          
          >
          <button @click ="$emit('delite-emit', index)">X</button>
        {{product.brand}}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    products: Array
  },
  methods:{
    
  }
}
</script>

<style >
  .listCategor{
    background: #FFFBF2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span{
    position:relative;
    margin-bottom:5px;
    width: 80%;
    text-align: center;
    display: block;
    padding: 5%;
  }
  span button{
    background:none;
    border:none;
    position: absolute;
    top:0;
    left: 0;
    transition:background .2s linear;

  }
  span button:hover{
    background: red;
  }
</style>