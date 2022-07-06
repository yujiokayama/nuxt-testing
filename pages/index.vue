<template>
  <div>
    <Tutorial />
    <MswTest />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MswTest from '../components/MswTest.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MswTest },
})
</script>
