<script setup>
import Counter from "./components/Counter.vue";
import CounterSettingsForm from "./components/CounterSettingsForm.vue";
import {ref} from "vue";

let color = ref('')
let min = ref(0)
let max = ref(1)
let step = ref(1)

const setData = (e) => {
    color.value = e[0]
    min.value = e[1]
    max.value = e[2]
    step.value = e[3]
    console.log(color.value, min.value, max.value, step.value)
}
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
        <Counter color="red" min="0" max="10" step="1"/>
        <Counter color="yellow" min="10" max="100" step="10"/>
        <Counter color="green" min="1" max="20" step="2"/>

<!--        <div class="flex">-->
<!--            <CounterSettingsForm @sendData="setData($event)" />-->
<!--            <Counter :color=color.value :min=min.value :max=max.value :step=step.value />-->
<!--        </div>-->
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
