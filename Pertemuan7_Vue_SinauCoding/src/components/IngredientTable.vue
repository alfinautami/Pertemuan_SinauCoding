<script setup>
import { ref, onMounted } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  formatRupiah: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['delete-ingredient'])

const ingredients = ref([])
const totalData = ref(0)
const totalAmount = ref(0)
const totalPrice = ref(0)

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('ingredientsData')) || []
  ingredients.value = data
  totalData.value = data.length
  totalAmount.value = data.reduce((acc, ingredient) => acc + parseInt(ingredient.amount), 0)
  totalPrice.value = data.reduce((acc, ingredient) => acc + (ingredient.amount * ingredient.price), 0)
})

const deleteIngredient = (index) => {
  ingredients.value.splice(index, 1)
  totalData.value = ingredients.value.length
  totalAmount.value = ingredients.value.reduce((acc, ingredient) => acc + parseInt(ingredient.amount), 0)
  totalPrice.value = ingredients.value.reduce((acc, ingredient) => acc + (ingredient.amount * ingredient.price), 0)
  localStorage.setItem('ingredientsData', JSON.stringify(ingredients.value))
  emit('delete-ingredient', index)
}

const printData = () => {
  router.push({
    name: 'PrintView',
    params: {
      totalAmount: totalAmount.value,
      totalPrice: totalPrice.value
    }
  })
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Ingredient</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="ingredients.length === 0">
          <td colspan="6" class="no-data">Tidak ada data</td>
        </tr>
        <tr v-for="(ingredient, index) in ingredients" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ ingredient.ingridient }}</td>
          <td>{{ formatRupiah(ingredient.price) }}</td>
          <td>{{ ingredient.amount }}</td>
          <td>{{ formatRupiah(ingredient.amount * ingredient.price) }}</td>
          <td><button @click="deleteIngredient(index)">Delete</button></td>
        </tr>
        <tr>
          <td colspan="3" class="total-label">Total Amount:</td>
          <td class="total-amount">{{ totalAmount }}</td>
          <td class="total-amount">{{ formatRupiah(totalPrice) }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="total-data">
      <p>Total Data: {{ totalData }}</p>
    </div>
    <div class="cetak"> 
      <button><a href="#/payment">Cetak Tagihan</a></button>
    </div>
  </div>
</template>

<style scoped>
.table {
  max-width: 800px;
  margin: 20px auto;
}
.table table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}
.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.no-data {
  text-align: center;
}
.total-data {
  text-align: center;
  margin: 10px 0;
}
.total-label {
  text-align: right;
  font-weight: bold;
}
.total-amount {
  text-align: center;
}
.cetak {
  margin-top: 10px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
