<script>
import DataTable from './components/DataTable.vue';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    DataTable
  },
  data() {
    return {
      headers: [],
      users: []
    };
  },
  methods: {
    handleShowData(id, nama, position, no_telp, email) {
      alert(`User ID: ${id}\nNama: ${nama}\nPosition: ${position}\nNo Telp: ${no_telp}\nEmail: ${email}`);
    },
  },
  created() {
    axios.get('../utils/Header.json')
      .then(response => {
        this.headers = response.data;
        console.log("sukses")
      })
      .catch(error => {
        console.error("data tidak terkoneksi", error);
      });

    axios.get('../utils/User.json')
      .then(response => {
        this.users = response.data;
        console.log("sukses")
      })
      .catch(error => {
        console.error("data tidak terkoneksi", error);
      });
  }
}
</script>


<template>
  <div id="app">
    <DataTable :headers="headers" :users="users" @show-data="handleShowData" />
  </div>
</template>



<style>

</style>
