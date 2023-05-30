<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { Username } from '../models/Username';



const printNames = () => {
  
  console.log("Hello World:", Username.names);
}

// Call printNames when the component is mounted
onMounted(printNames);
</script>

<template>
  <div>
    <button @click="printNames">Print Names</button>
  </div>
</template>
