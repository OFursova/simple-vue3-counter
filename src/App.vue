<script setup>
import Counter from "./components/Counter.vue";

</script>

<template>
    <div class="flex justify-center py-8">
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo"/>
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
        </a>
    </div>
    <div class="flex flex-col items-center justify-center">
        <Counter color="bg-red-500" min="0" max="10" step="1"/>
        <Counter color="bg-yellow-500" min="10" max="100" step="10" />
        <Counter color="bg-green-500" min="1" max="20" step="2" />
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
