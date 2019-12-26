<template>
  <div class="container">
    <form action="">
      <label for="image">Image</label>
      <validation-provider 
        v-slot="{ errors }"
        rules="required" 
      >
        <input 
          id="image" 
          v-model="image"
          type="text"
        >
        <p>{{ errors[0] }}</p>
      </validation-provider>
      <br />
      <label for="title">Title</label>
      <validation-provider 
        v-slot="{ errors }"
        rules="required" 
      >
        <input 
          id="title"
          v-model="title"
          type="text"
        >
        <p>{{ errors[0] }}</p>
      </validation-provider>
      <br />
      <label for="description">Description</label>
      <validation-provider 
        v-slot="{ errors }"
        rules="required" 
      >
        <input 
          id="description"
          v-model="description"
          type="text"
        >
        <p>{{ errors[0] }}</p>
      </validation-provider>
      <br />
      <label for="favorite">Favorite product?</label>
      <input 
        id="favorite" 
        type="checkbox"
      >
      <br />
      <input 
        type="submit"
        name="submit" 
        value="Submit"
      >
    </form>
  </div>
</template>

<script>

import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  components: {
    ValidationProvider
  },
  data: () => ({
    title: '',
    image:'',
    description: ''
  })
}
</script>

<style>
  .container{
    width:450px;
    margin: 50px auto 0 auto;
    text-align: center;
    background-color: rgba(24, 33, 52, 0.7);
    box-shadow: 0 -5px 0 #3adbfd;

  }
  form{
    padding:20px 0;
    display: flex;
    flex-direction: column;
    align-items: center
  }
  label{
    font-size: 30px;
    color:white;
  }
  form input[type="text"],input[type="password"]{
    width: 400px;
    height:50px;
    font-size: 18px;
    margin-bottom: 25px;
    border-radius: 4px;
    padding-left: 10px;
  }
  form input[type="checkbox"]{
    zoom:1.8;
  }
  input[type="submit"]{
  padding: 13px 30px;
  margin: 5px 0 20px 0;
  font-size: 15px;
  color: #fff;
  background-color: #2ca8c6;
  border: none;
  cursor: pointer;
  }
  input[type="submit"]:hover{
  transition: all 0.5s;
  background: #fff;
  color: #2c536c;
  }
  span p{
    font-size: 20px;
    font-weight: 600;
    color:#f36c6c;
    margin:0;
  }
</style>