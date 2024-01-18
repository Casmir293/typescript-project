<template>
  <div>
    <h1>HELLO, WORLD!</h1>
    <p>Hello {{ name }} - {{ age }}</p>
    <button @click="changeName('Ben')">Change Name</button>
    <button @click="changeAge(49)">Change Name</button>

    <h2>{{ jobs[0].location }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import jobs from '../src/types/Job'

const name = ref<string>('Casmir')
const age = ref<number>(26)

const changeName = (newName: string) => {
  name.value = newName
}

const changeAge = (newAge: number) => {
  age.value = newAge
}
</script>

<style scoped></style>
