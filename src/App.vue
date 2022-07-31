<script>
import Counter from './pages/Counter.vue'
import Comments from './pages/Comments.vue'

const routes = {
    '/': Comments,
    '/counter': Counter
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <a href="#/">Comments</a> |
    <a href="#/counter">Counter</a> |
    <component :is="currentView" />
</template>
