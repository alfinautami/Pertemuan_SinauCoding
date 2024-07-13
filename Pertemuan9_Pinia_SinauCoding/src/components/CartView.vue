<script setup>
import '../style.css'
import { onMounted } from 'vue';
import { useProductStore } from '../useProductStore';
import { useRouter } from 'vue-router';

const productStore = useProductStore();
const router = useRouter();

onMounted(() => {
  productStore.fetchProductData();
});

const toggleItem = (item) => {
  
    productStore.addItem(item.id);
};

</script>

<template>
  <div>
    <h1>This is the Chart View page</h1>
    <h5>Items for sale</h5>
    <h5>Total items: {{ productStore.addedItems.length }}</h5>
    <div v-for="item in productStore.product" :key="item.id" class="card">
      <p>{{ item.title }}</p>
      <button @click="toggleItem(item)">
        Add
      </button>
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
