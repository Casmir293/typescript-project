<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>${{ job.salary }}</p>
        </div>

        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis dolor
            dignissimos at explicabo amet, doloremque sint minima eum eveniet architecto atque sunt.
            Modi ab quae molestias obcaecati? Voluptate, fugit!
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Job, jobs } from '../types/Job'
import OrderTerm from '../types/OrderTerm'

const props = defineProps(['order'])

const orderedJobs = computed(() => {
  return [...jobs].sort((a: Job, b: Job) => {
    const orderTerm: OrderTerm = props.order
    return a[orderTerm] > b[orderTerm] ? 1 : -1
  })
})
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}

.list-move {
  transition: all 0.5s;
}
</style>
