<script setup>
import { ref, computed } from 'vue'
import IngredientForm from '../components/IngredientForm.vue'
import IngredientTable from '../components/IngredientTable.vue'

const ingredients = ref([])

const addIngredient = (newIngredient) => {
  ingredients.value.push(newIngredient)
}

const deleteIngredient = (index) => {
  ingredients.value.splice(index, 1)
}

const totalData = computed(() => ingredients.value.length)

const totalAmount = computed(() => {
  return ingredients.value.reduce((sum, ingredient) => {
    return sum + ingredient.amount
  }, 0)
})

const totalPrice = computed(() => {
  return ingredients.value.reduce((sum, ingredient) => {
    return sum + ingredient.price * ingredient.amount
  }, 0)
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
  <div>
    <IngredientForm @add-ingredient="addIngredient" />
    <IngredientTable
      :ingredients="ingredients"
      @delete-ingredient="deleteIngredient"
      :totalData="totalData"
      :totalAmount="totalAmount"
      :totalPrice="totalPrice"
      :formatRupiah="formatRupiah"
    />
  </div>
</template>


