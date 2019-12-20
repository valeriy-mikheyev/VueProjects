<template>
  <div class= "MainPage">
    <SideBar 
    :products="products"
    />
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
  components:{
    SideBar
  },
    data: function(){
      return{
      products:[
        {brand:'Iphone'},
        {brand:'Samsung'},
        {brand:'Xiomi'},
        {brand:'GooglePixel'}
      ]
    }
  }
}
</script>

<style >
  .MainPage{
    width: 100%;
  }
</style>