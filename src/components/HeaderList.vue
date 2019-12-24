<template>
  <div class="header">
    <ul>
      <li>
        <button @click ="$emit('display-favorites')">Show Favorites</button>
      </li>
    </ul>

  </div>
</template>
<script>
export default {

}
</script>

<style >
  ul{
    list-style: none;
    align-items: center;
    margin:0 auto;
    display: flex;
  }
  .header{
    display: flex;
    width: 100%;
    height: 60px;
  }
  .header button{
    cursor: pointer;
    font-size: 18px;
    border:none;
    border-radius:5px;
    text-align: center;
    height: 40px;
    background-color: #ABABAB;
  }
</style>