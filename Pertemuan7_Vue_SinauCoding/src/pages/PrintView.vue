<script setup>
import { ref, onMounted } from 'vue'

const ingredientsData = ref([])

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('ingredientsData')) || []
  ingredientsData.value = data
})

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount)
}
</script>

<template>
  <div class="print-view">
    <h1>Payment</h1>
    <div v-if="ingredientsData.length === 0" class="no-data">Tidak ada data</div>
    <div v-else>
      <div v-for="(ingredient, index) in ingredientsData" :key="index" class="ingredient-item">
        <p>Total Pembayaran Yang harus di bayar oleh {{ ingredient.customer }} dari {{ ingredient.amount }} sebesar {{ formatRupiah(ingredient.amount * ingredient.price) }} </p>
      </div>
    </div>
  </div>
  <div class="back-button">
    <button><a href="/">Back</a></button>
  </div>
</template>

<style scoped>
.print-view {
  color: 'black';
  max-width: 800px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.no-data {
  text-align: center;
}
.ingredient-item {
  margin-bottom: 20px;
  padding: 10px;
  
}
.ingredient-item p {
  margin: 0;
  padding: 4px 0;
}
.back-button {
  text-align: center;
  margin-top: 20px;
}
.back-button a {
  text-decoration: none;
  color: inherit;
}
.back-button button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
