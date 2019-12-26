<template>
  <div class="CardInner">
    <div
      v-for="products in product"
      :key="products.title"
      class="CardItem"
    >
      <img
        :src="products.image"
        alt=""
      >
      <h2>{{ products.title }}</h2>
      <span>{{ products.description }} </span>
      <label
        class="favorite__heart"
        :class="{'favorite__heart__selected':products.favorites}"
      >
                
        <input
          v-model="products.favorites"
          class="favorite__checkbox"
          type="checkbox"
        >
        ❤ {{ products.favorites }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:Array
  }
}
</script>

<style >
  .CardInner{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content:flex-start;
  }
  .CardItem{
    border:1px solid #ABABAB;
    width: 24%;
    margin-right:10px;
    margin-bottom:20px;
  }
  .CardItem img{
    margin-top:20px;
    margin-bottom:15px;
  }
  .CardItem h2{
    margin:0;
  }
  .CardItem span{
    display: block;
    padding: 0;
    margin:0 auto;
    margin-bottom: 25px;
    margin-top:5px;
  }

.favoriting{
    display: inline-block
}
.favorite__heart {
    text-align: left;
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 30px;
    color: #ABABAB;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
.favorite__heart.is-disabled:hover {
     cursor: default;
 }
.favorite__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    color: #ABABAB;
}
.favorite__heart__selected{
    color: #df470b;
}
</style>