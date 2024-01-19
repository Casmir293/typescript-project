<template>
  <div class="container">
    <h1>Available Jobs</h1>

    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>

    <jobs-list :jobs="jobs" :order="order" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { jobs } from '../src/types/Job'
import OrderTerm from '../src/types/OrderTerm'
import JobsList from './components/JobsList.vue'

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  order.value = term
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}

.container {
  background-color: rgb(199, 199, 199);
  padding: 20px 0;
}

header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
