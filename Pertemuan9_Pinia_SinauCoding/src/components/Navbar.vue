<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/added-items" class="purple-text">Chart Log</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    padding: 10px;
    color: white;
    width: 100%;
    text-align: left;
  }
  
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar li {
    display: inline;
    margin-right: 10px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a.purple-text {
    color: blue;
   
  }
  </style>
  