<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Username } from '../models/Username';

const names = ref<string[]>([]);

onMounted(() => {
  names.value = Username.names;
});
const handlePlayer1Input = (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  const name = capitalizeFirstLetter(inputElement.value);
  updateNames(0, name);
}

const handlePlayer2Input = (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  const name = capitalizeFirstLetter(inputElement.value);
  updateNames(1, name);
}

const capitalizeFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const updateNames = (index: number, name: string) => {
  names.value[index] = name;
}

const startGame = () => {
  console.log("Player 1 Name:", names.value[0]);
  console.log("Player 2 Name:", names.value[1]);
 // console.log(Username.names)
}
</script>

<template>
  <form @submit.prevent="startGame" class="centered-form">
    <input type="text" id="player1" :value="names[0]" @input="handlePlayer1Input" placeholder="Player 1 Name" required>

    <input type="text" id="player2" :value="names[1]" @input="handlePlayer2Input" placeholder="Player 2 Name" required>

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
