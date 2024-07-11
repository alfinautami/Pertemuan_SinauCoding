<script>
export default {
  props: {
    headers: Array,
    users: Array
  },
  methods: {
    tampilUser(id, nama, position, no_telp, email) {
      this.$emit('show-data', id, nama, position, no_telp, email);
    }
  }
}
</script>

<template>
    <div>
      <table border="1">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.no_telp }}</td>
          <td>{{ user.email }}</td>
          <td><button @click="tampilUser(user.id, user.nama, user.position, user.no_telp, user.email)">Show Data</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <style>
    th,td {
        padding: 8px;
    }
  </style>
  