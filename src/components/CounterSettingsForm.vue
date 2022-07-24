<script setup>
import {computed, ref, defineEmits} from 'vue'

const emit = defineEmits(['sendData'])

let color = ref('')
let min = ref(0)
let max = ref(1)
let step = ref(1)

const save = () => {
    emit('sendData', [color.value, min.value, max.value, step.value])
}

const defaultStyling = "w-max h-max border rounded border-solid px-4 py-2 m-2 bg-gray-200"

</script>

<template>
    <form action="" :class=defaultStyling class="flex flex-col items-center m-4 bg-gray-100">
        <input type="text" v-model="color" :class=defaultStyling placeholder="Color">
        <input type="number" v-model="min" :class=defaultStyling placeholder="Start count from">
        <input type="number" v-model="max" :class=defaultStyling placeholder="Finish count at">
        <input type="number" v-model="step" :class=defaultStyling placeholder="Step">
        <button type="button" @click="save" :class=defaultStyling class="bg-blue-200 m-4">
            Submit
        </button>
    </form>
</template>
