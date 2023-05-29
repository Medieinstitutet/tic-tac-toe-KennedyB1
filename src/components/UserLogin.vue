<script setup lang="ts">
import { ref } from 'vue'

const player1Name = ref("");
const player2Name = ref("");

const handlePlayer1Input = (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  player1Name.value = capitalizeFirstLetter(inputElement.value);
}

const handlePlayer2Input = (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  player2Name.value = capitalizeFirstLetter(inputElement.value);
}

const capitalizeFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const startGame = () => {
  console.log("Player 1 Name:", player1Name.value);
  console.log("Player 2 Name:", player2Name.value);
}
</script>

<template>
  <form @submit.prevent="startGame" class="centered-form">
    <input type="text" id="player1" v-model="player1Name" @input="handlePlayer1Input" placeholder="Player 1 Name" required>

    <input type="text" id="player2" v-model="player2Name" @input="handlePlayer2Input" placeholder="Player 2 Name" required>

    <button type="submit">Start Game</button>
  </form>
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
