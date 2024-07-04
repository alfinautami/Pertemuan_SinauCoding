<script setup>
import HelloWorld from './components/HelloWorld.vue'

// Import gambar
import ilustratorImage from './assets/ilustrator.svg'
import twitterImage from './assets/twitter.svg'
import googleImage from './assets/google.svg'
import appleImage from './assets/apple.svg'
</script>

<template>
   <div class="left">
        <div class="left-head">
            <h1>Welcome to Twitter</h1>
            <h3>Happening now, join twitter today</h3>
        </div>
        <img :src="ilustratorImage" alt="My Image">
        
        <footer>© 2022 Twitter,Inc</footer>
    </div>
    <div class="right">
        <div class="container">
            <div class="twitter">
              <img :src="twitterImage" alt="Twitter Logo">
                <h5>Don't have a account? 
                <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D">Sign Up</a></h5>
            </div>
            <h1>Log in to Twitter</h1>
            <h4>Enter Twitter Account</h4>
            <input type="text" placeholder="Phone,email or username">
            <input type="password" placeholder="Password">
            <div class="forget">
                <a href="https://x.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D">forgot password ?</a>
            </div>
            <button type="btnsignin">Sign In</button>
                
            <p>or</p>
            <div class="auth">
                <button class="google"> 
                  <img :src="googleImage" alt="Google Logo">
                    Sign in with Google
                </button>
                <button class="apple">
                  <img :src="appleImage" alt="Apple Logo">
                    Sign in with Apple
                </button>
            </div>
          </div>
      </div>
</template>


