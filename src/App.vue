<script>
import Counter from './pages/Counter.vue'
import Comments from './pages/Comments.vue'

const routes = {
  '/': Comments,
  '/counter': Counter
}

export default {
  data () {
    return {
      currentPath: window.location.hash
    }
  },
  methods: {
    updatePage() {
      this.currentPath = window.location.hash
    }
  },
  computed: {
    currentView () {
      return routes[this.currentPath.slice(1) || '/'] || 'NotFound'
    }
  },
  mounted () {
    window.addEventListener('hashchange', this.updatePage)
  },
  beforeUnmount () {
    window.removeEventListener('hashchange', this.updatePage)
  }
}
</script>

<template>
  <a href="#/">Comments</a> |
  <a href="#/counter">Counter</a> |
  <component :is="currentView"/>
</template>
