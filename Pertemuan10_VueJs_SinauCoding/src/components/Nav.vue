<script>
  export default {
    name: 'Navbar'
  };
  </script>


<template>
    <nav class="navbar">
      <ul>
        <li><a href="#"><h1>Axios</h1></a></li>
      </ul>
    </nav>
  </template>
  
  
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 5px;
  }
  .navbar ul {
    list-style: none;

  }  
  .navbar a {
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  