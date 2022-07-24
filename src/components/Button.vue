<script setup>
import { ref } from 'vue'

defineProps({
    color: String,
    title: String
})

</script>

<template>
    <button
        type="button"
        :class="color"
        class="w-max h-max border rounded border-solid px-4 py-2 m-4 text-gray-800 font-bold uppercase">
        {{ title }}
    </button>
</template>
