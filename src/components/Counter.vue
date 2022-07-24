<script setup>
import {computed, ref} from 'vue'
import Button from "./Button.vue";

const props = defineProps({
    min: Number,
    max: Number,
    step: Number,
    color: String
})

const count = ref(props.min)

let addColor = computed(() => {
    if (props.color == 'red') {
        return 'bg-red-500'
    } else if (props.color == 'green') {
        return 'bg-green-500'
    } else if (props.color == 'yellow') {
        return 'bg-yellow-500'
    } else {
        return 'bg-blue-500';
    }
})

let removeColor = computed(() => {
    if (props.color == 'red') {
        return 'bg-red-700'
    } else if (props.color == 'green') {
        return 'bg-green-700'
    } else if (props.color == 'yellow') {
        return 'bg-yellow-700'
    } else {
        return 'bg-blue-700';
    }
})

const addCount = () => {
    if (count.value <= props.max - props.step) {
        count.value = parseInt(count.value) + parseInt(props.step)
    }
}

const removeCount = () => {
    if (count.value >= parseInt(props.min) + parseInt(props.step)) {
        count.value = count.value - props.step
    }
}
</script>

<template>
    <div class="flex flex-col items-center p-4 m-2 w-3/12 h-max border rounded border-solid bg-gray-200">
        <h2 class="text-3xl">Current count is: {{ count }}</h2>
        <p class="text-lg text-gray-500">This counter's interval is {{ min }} to {{ max }} step is {{ step }}</p>
        <div class="flex">
            <Button :color="addColor" @click="addCount" title="add"/>
            <Button :color="removeColor" @click="removeCount" title="remove"/>
        </div>
    </div>
</template>
