<template>
  <div class="MainPage">
    <div class="containerInner">
      <SideBar 
        :category="category"
        @delite-items="deleteItem"
        @create-category="createCategory"
        @filter-category="filterCategory($event)"
        @display-favorites="setIsActive"
      />
      <ProductContainer
        :product="filteredProducts"
      />
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import ProductContainer from './ProductContainer.vue'
export default {
  components:{
    SideBar,
    ProductContainer,
  },
  props:{
    active:Boolean
  },
    data(){
      return{
      category:[
        {brand:'Iphone', active:false},
        {brand:'Samsung', active:false},
        {brand:'Xiomi', active:false},
        {brand:'GooglePixel', active:false}
      ],
      product:[
        {brand:'Iphone', title:'Iphone', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'Samsung', title:'Samsung', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: true},
        {brand:'Xiomi', title:'Xiomi', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'GooglePixel', title:'GooglePixel', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'Iphone', title:'Iphone 11', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'Samsung', title:'Samsung S10', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'Xiomi', title:'Xiomi miPro', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {brand:'GooglePixel', title:'GooglePixel 10', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: true}
      ],
      isActive:false,
      brand: []
    }
  },
  computed: {
    filteredProducts() {
      console.log('123')
      const filteredByBrand = this.brand.length !== 0 ? 
        this.product.filter(product =>  this.brand.includes(product.brand)) : this.product

        const filterByFavorites = this.isActive ? 
          filteredByBrand.filter(favorit => favorit.favorites === true ) : filteredByBrand 

        return filterByFavorites;

    }
  },
  methods:{
    deleteItem(index){
      this.category.splice(index, 1);
    },
    createCategory(newBrand){
      this.category.push({brand:newBrand});
    },
    setIsActive(){
      this.isActive = !this.isActive
    },
    filterCategory(data){
      // data - iphone
      // this.brand = [iphone, xiamo]
      // this.brand = []
      // this.brand = [google, xiamo]
      if(this.brand.includes(data)){
        console.log(this.brand)
        this.brand = this.brand.filter(function(value){
          return value !== data
        })
        console.log(this.brand)
      }else{
        this.brand.push(data)
      }

      // eslint-disable-next-line no-console
      console.log(this.brand)
    }
  }
}
</script>

<style >
.containerInner{
  padding-top:10px;
  display: flex;
}
  .MainPage{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>