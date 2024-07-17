
<script>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import Nav from '../components/Nav.vue';

export default {
  components : {
    Nav
  },
  setup() {
    const posts = reactive([]);
    const users = reactive([]);

    onMounted(async () => {
    try {
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    const limitedPosts = postsResponse.data.slice(0, 10); // Ambil 10 data pertama
    posts.push(...limitedPosts);
    console.log(posts, 'Posts');

    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
  
    const limitedUsers = usersResponse.data.slice(0, 5); // Ambil 5 data pertama
    users.push(...limitedUsers);
    console.log(users, 'Users');
  } catch (error) {
    console.error("There was an error fetching the data:", error);
  }
    });
    
    return { posts, users };
  }
};
</script>

<template>
    <Nav />
    <div class="main">
    <h1 class="centered">Posts</h1>
    <div v-for="post in posts" :key="post.id" class="card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    
    <h1 class="centered">Authors</h1>
    <div class="authors-container">
      <div v-for="user in users" :key="user.id" class="card">
        <h3>{{ user.name }}</h3>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centered {
  text-align: center;
  margin-bottom: 20px;
}

.main{
  margin-left: 5%;
  margin-right: 5%;
}

.card {
  border: 2px solid #4a4545; 
  padding: 8px; 
  margin-bottom: 20px;
  border-radius: 5px; 

  text-align: left;
}

.authors-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 16px; 
}


</style>
