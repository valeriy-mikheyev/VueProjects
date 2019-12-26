<template>
  <div class="header">
    <ul>
      <router-link tag="li" :to="{ name: 'products-list'}">Главная страница</router-link>
      <router-link tag="li" :to="{ name: 'form' }">Перейти к форме</router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style >

li{
  cursor: pointer;
  color: rgba(10, 10, 10, 1);
}

.router-link-active {
  color: red;
}
  ul{
    margin: 0 auto;
    padding: 10px 0 14px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    list-style: none;
  }
  li{
    padding:0 10px;
    font-size: 20px;
    margin-right: 20px;
  }
  .header{
    display: flex;
    width: 100%;
    height: 60px;
  }
  
</style>