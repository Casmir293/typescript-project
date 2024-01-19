<template>
  <div>
    <h1>Available Jobs</h1>
    <jobs-list :jobs="jobs" />
  </div>
</template>

<script setup lang="ts">
import jobs from '../src/types/Job'
import JobsList from './components/JobsList.vue'
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}

* {
  background-color: rgb(199, 199, 199);
  padding: 20px 0;
}
</style>
