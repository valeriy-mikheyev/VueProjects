<template>
  <div class="CategoryList">
    <CategoriesList
      :category="category"
      @delite-emit="$emit('delite-items', $event)"
      @show-category="$emit('filter-category', $event)"
    />
    <input
      v-model="categoryText"
      type="text"
      placeholder="Write ur category"
    >
    <button
      class="pushButton"
      @click="newCategory()"
    >
      Add Category
    </button>
    <button 
      class="Show"
      @click="buttonEmit"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import CategoriesList from  './CategoriesList.vue'
export default {
  components :{
    CategoriesList
  },
  props:{
    category: Array
  },
  data(){
    return{
      categoryText: '',
      show: false,
    };
  },
  computed: {
    btnText: function() {
      if(this.show) {
        return 'Hide Favorites'
      }
      return 'Show Favorites' 
    }
  },
  methods: {
    newCategory(){
      if(this.categoryText.length > 0){
        const newCategory = this.categoryText
        this.$emit('create-category', newCategory)
      }
    this.categoryText= '';
    },
    buttonEmit(){
      this.$emit('display-favorites')
      this.show = !this.show 
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
.Show{
    cursor: pointer;
    font-size: 18px;
    border:none;
    border-radius:5px;
    text-align: center;
    height: 40px;
    background-color: #ABABAB;
  }
</style>