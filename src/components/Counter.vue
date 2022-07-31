<script setup>
import {computed, ref} from 'vue'
import Button from "./Button.vue";

const props = defineProps({
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      validator: (val) => ['red', 'yellow', 'green'].includes(val)
    }
})

const count = ref(props.min)

const addCount = () => {
    const newVal = count.value + props.step;
    count.value = newVal > props.max ? props.max : newVal;
}

const removeCount = () => {
    const newVal =  count.value - props.step;
    count.value = newVal < props.min ? props.min : newVal;
}
</script>

<template>
    <div class="flex flex-col items-center p-4 m-2 w-3/12 h-max border rounded border-solid bg-gray-100">
        <h2 class="text-3xl">Current count is: {{ count }}</h2>
        <p class="text-lg text-gray-500">Min: {{ min }} - Max: {{ max }} - Step: {{ step }}</p>
        <div class="flex">
            <Button :color="props.color" add @click="addCount" title="add"/>
            <Button :color="props.color" @click="removeCount" title="remove"/>
        </div>
    </div>
</template>
