<template>
  <div class="listCategor">
    <span
      v-for="(product, index) in category"
      :key="product.brand"
      :class="{'Active':product.active}"
      @click="showCategory(product)" 
    >
      <button @click="$emit('delite-emit', index)">X</button>
      {{ product.brand }}
      
    </span>
  </div>
</template>

<script>
export default {
  props:{
    category:{
      type: Array,
      default: ()=>{
        return []
      }
    }
    },
  methods:{
    showCategory(product){
      this.$emit('show-category', product.brand );
      product.active =!product.active;
    }
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
  .listCategor span{
    background: #FFFBF2;
    cursor: pointer;
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
  .listCategor .Active{
    background: none;
  }
</style>