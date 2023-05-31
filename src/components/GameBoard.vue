<script setup lang="ts">
import { ref, computed } from 'vue';
import { Username } from '../models/Username';
import { checkWinner } from '../models/checkWinner';

const board = ref(Array(9).fill(''));
let currentPlayer = ref('X');
let gameOver = ref(false);
let winner = ref<string | null>(null); // Adjusted type annotation

const makeMove = (index: number): void => {
  if (board.value[index] === '' && !gameOver.value) {
    board.value[index] = currentPlayer.value;
    const winningPlayer = checkWinner(board.value);
    if (winningPlayer) {
      gameOver.value = true;
      winner.value = winningPlayer;
    } else {
      currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
    }
  }
};

const resetGame = (): void => {
  board.value = Array(9).fill('');
  currentPlayer.value = 'X';
  gameOver.value = false;
  winner.value = null;
};

const gameStatus = computed(() => {
  if (gameOver.value) {
    if (winner.value === 'X') {
      return `${Username.names[0]} wins!`;
    } else if (winner.value === 'O') {
      return `${Username.names[1]} wins!`;
    }
  } else if (board.value.every(cell => cell !== '')) {
    return "Tie!";
  } else {
    const currentPlayerIndex = currentPlayer.value === 'X' ? 0 : 1;
    return `${Username.names[currentPlayerIndex]}'s turn`;
  }
});
</script>

<template>
  <p>{{ gameStatus }}</p>
  <div class="gameboard">
    <div class="cell" v-for="(cell, index) in board" :key="index" @click="makeMove(index)">
      <span :class="cell">{{ cell }}</span>
    </div>
  </div>

  <button @click="resetGame">Reset</button>
</template>

<style scoped>
.gameboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 300px;
  margin-bottom: 20px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25d8b7;
  cursor: pointer;
  font-size: 24px;
  height: 100px;
}

.X {
  color: blue;
}

.O {
  color: red;
}
</style>
