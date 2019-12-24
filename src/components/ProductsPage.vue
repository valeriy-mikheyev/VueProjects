<template>
  <div class= "MainPage">
    <header-list
    @display-favorites="isActive"
    />
    <div class="containerInner">
    <SideBar 
    :products="products"
    @delite-items="deleteItem"
    :product="product"
    @create-category="createCategory"
    />
    <ProductContainer
    :product="filtered"
    
    />
    
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import ProductContainer from './ProductContainer.vue'
import HeaderList from './HeaderList.vue'
export default {
  props:{
    active:Boolean
  },
  components:{
    SideBar,
    ProductContainer,
    HeaderList
  },
    data: function(){
      return{
      products:[
        {brand:'Iphone'},
        {brand:'Samsung'},
        {brand:'Xiomi'},
        {brand:'GooglePixel'}
      ],
      product:[
        {title:'Iphone', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'Samsung', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: true},
        {title:'Xiomi', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'GooglePixel', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'Iphone 11', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'Samsung S10', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'Xiomi miPro', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: false},
        {title:'GooglePixel 10', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos fuga quasi suscipit', image:'https://via.placeholder.com/300x200' ,favorites: true}
      ],
      isactive:false,
    }
  },
  methods:{
    deleteItem(index){
      this.products.splice(index, 1);
    },
    createCategory(newBrand){
      this.products.push({brand:newBrand});
    },
    isActive(){
      // eslint-disable-next-line no-console
      console.log(this.isactive)
      this.isactive =!this.isactive
    }
  },
  computed:{
          filtered: function(){
            return this.product.filter(e =>{
              if (this.isactive){
                return e.favorites == true;
              }else{
                return this.product
              }
            })
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