<template>
  <div class= "MainPage">
    <SideBar 
    :products="products"
    @delite-items="deleteItem"
    @create-category="createCategory"
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
  },
  methods:{
    deleteItem(index){
      this.products.splice(index, 1);
    },
    createCategory(newBrand){
      this.products.push({brand:newBrand});
    }
  }
}
</script>

<style >
  .MainPage{
    width: 100%;
  }
</style>