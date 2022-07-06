<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <ul>
      <li v-for="user in users" :key="user.id">
        id: {{ user.id }}, name: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MswTest',
  data() {
    return {
      users: [],
    }
  },
  async mounted() {
    const res = await fetch('/users')
    this.users = await res.json()
  },
}
</script>
