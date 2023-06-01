<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Username } from '../models/Username';
import GameBoard from './GameBoard.vue';

const names = ref<string[]>([]);

onMounted(() => {
  names.value = Username.names;
});

const gameStarted = ref(false);

const startGame = () => {
  console.log("Player 1 Name:", names.value[0]);
  console.log("Player 2 Name:", names.value[1]);
  gameStarted.value = true;
}
</script>

<template>
  <div v-if="!gameStarted">
    <form @submit.prevent="startGame" class="centered-form">
      <input type="text" id="player1" v-model="names[0]" placeholder="Player 1 Name" required>
      <input type="text" id="player2" v-model="names[1]" placeholder="Player 2 Name" required>
      <button type="submit">Start Game</button>
    </form>
  </div>

  <div v-else>
    <GameBoard />
  </div>
</template>

<style scoped>
.centered-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.centered-form input,
.centered-form button {
  margin: 5px;
}
</style>
