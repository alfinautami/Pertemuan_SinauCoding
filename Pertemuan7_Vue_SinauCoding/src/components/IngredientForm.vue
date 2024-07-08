<script setup>
import { ref, defineEmits } from 'vue'

const customer = ref('')
const ingridient = ref('')
const amount = ref('')
const price = ref('')
const emit = defineEmits(['add-ingredient'])

const addIngridient = (e) => {
  e.preventDefault()
  const newIngredient = {
    customer: customer.value,
    ingridient: ingridient.value,
    amount: amount.value,
    price: price.value
  }
  
  // Emit event
  emit('add-ingredient', newIngredient)
  
  // Get existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem('ingredientsData')) || []
  existingData.push(newIngredient)
  
  // Save updated data to localStorage
  localStorage.setItem('ingredientsData', JSON.stringify(existingData))

  // Clear form fields
  customer.value = ''
  ingridient.value = ''
  amount.value = ''
  price.value = ''

  // Reload the page
  window.location.reload()
}
</script>

<template>
  <div class="form">
    <h1>List Ingredient</h1>
    <form @submit="addIngridient">
      <center>
        <label for="customer">Customer</label>
        <br>
        <input type="text" name="customer" id="customer" v-model="customer">
        <br>
      </center>
      <label for="ingridient"> Ingredient </label>
      <input type="text" name="ingridient" id="ingridient" v-model="ingridient">
      <label for="amount"> Amount </label>
      <input type="number" name="amount" id="amount" v-model="amount">
      <label for="price"> Price </label>
      <input type="number" name="price" id="price" v-model="price">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form h1 {
  text-align: center;
  margin-bottom: 100px;
}
input {
  margin-right: 10px;
}
</style>
