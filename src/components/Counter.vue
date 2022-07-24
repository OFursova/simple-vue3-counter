<script setup>
import {ref} from 'vue'
import Button from "./Button.vue";

const props = defineProps({
    min: Number,
    max: Number,
    step: Number,
    color: String
})

const count = ref(props.min)

const addCount = () => {
    if (count.value <= props.max - props.step) {
        count.value = parseInt(count.value) + parseInt(props.step)
    }
}
</script>

<template>
    <div class="flex flex-col items-center p-4 m-2 w-3/12 h-max border rounded border-solid bg-gray-200">
        <h2 class="text-3xl">Current count is: {{count}}</h2>
        <p class="text-lg text-gray-500">This counter's interval is {{min}} to {{max}} step is {{step}}</p>
        <Button :color="color" @click="addCount"/>
    </div>
</template>
