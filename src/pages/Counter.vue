<script setup>
import Counter from "../components/Counter.vue";
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
            <img src="../assets/vue.svg" class="logo vue" alt="Vue logo"/>
        </a>
    </div>
    <div class="flex items-center justify-around">
        <!--
        Todo: при передачі пропсів по дефолту тип буде строка щоб ти не передавала якщо ти хочешь передати число,
         булеве значення об'єкт ... в vue иснує спеціальний синтаксів
         v-bind:"назва пропсу" або скороченно :"назва пропсу"
         <Counter color="red" min="0" v-bind:max="10" :step="1"/>
         color = тип строка
         min = тип строка
         max = тип число
         step = тип число
         валідація типів також додає варнінги в консолі Invalid prop:
         -->
        <Counter color="red" :min="0" :max="10" :step="1"/>
        <Counter color="yellow" :min="10" :max="100" :step="10"/>
        <Counter color="green" :min="1" :max="20" :step="2"/>

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
