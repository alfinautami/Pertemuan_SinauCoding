import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    product: [],
    addedItems: [], 
  }),
  actions: {
    async fetchProductData() {
      try {
        const response = await axios.get('../utils/Product.json');
        this.product = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("data tidak terkoneksi", error);
      }
    },
    addItem(itemId) {
      this.addedItems.push(itemId);
    },
    removeItem(itemId) {
      const index = this.addedItems.indexOf(itemId);
      if (index > -1) {
        this.addedItems.splice(index, 1);
      }
    },
  },
});
