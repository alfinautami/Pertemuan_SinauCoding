<script setup>
import '../style.css';
import { useProductStore } from '../useProductStore';

const productStore = useProductStore();

const removeItem = (item) => {
  productStore.removeItem(item.id);
};
</script>

<template>
  <div>
    <h1>This is the Log Chart page</h1>
    <h5>Total items: {{ productStore.addedItems.length }}</h5>
    <div v-if="productStore.addedItems.length === 0">
      <h4>There is nothing in your cart</h4>
    </div>
    <div v-else>
      <div v-for="item in productStore.addedItems.map(id => productStore.product.find(product => product.id === id))" :key="item.id" class="card">
        <p>{{ item.title }}</p>
        <button @click="removeItem(item)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #000000; 
  padding: 10px; 
  margin-bottom: 20px;
  border-radius: 5px; 
}
</style>
