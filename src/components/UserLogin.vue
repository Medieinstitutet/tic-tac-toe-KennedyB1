<script setup lang="ts">
import { ref } from 'vue'



const usersInput = ref("");

const startGame = (e: Event) => {

    // https://medieinstitutet.sharepoint.com/sites/FED22D/Delade%20dokument/Forms/AllItems.aspx?FolderCTID=0x012000FCDBD6389286214B9B1AE945F6A1AAE7&sortField=Created&isAscending=true&id=%2Fsites%2FFED22D%2FDelade%20dokument%2FJavascript%20%2D%20F%C3%B6rdjupning%2FRecordings%2FJavascript%20%2D%20F%C3%B6rdjupning%20%2D%20Demon%20och%20fr%C3%A5gor%2D20230519%5F135012%2DM%C3%B6tesinspelning%2Emp4&viewid=cf5f9ac3%2Ddec3%2D43d4%2D8bb8%2D4f9a2473ae5d&parent=%2Fsites%2FFED22D%2FDelade%20dokument%2FJavascript%20%2D%20F%C3%B6rdjupning%2FRecordings
}
</script>


<template>
    <form @submit.prevent="startGame">
        <label for="player1">Player 1 Name:</label>
        <input type="text" id="player1" :value="usersInput" required>

        <label for="player2">Player 2 Name:</label>
        <input type="text" id="player2" :value="usersInput" required>

        <button type="submit">Start Game</button>
    </form>
</template>

<!--<template>
  <form @submit.prevent="startGame">
    <label for="player1">Player 1 Name:</label>
    <input type="text" id="player1" v-model="player1Name" required>

    <label for="player2">Player 2 Name:</label>
    <input type="text" id="player2" v-model="player2Name" required>

    <button type="submit">Start Game</button>
  </form>
</template>-->

  