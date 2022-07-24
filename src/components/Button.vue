<script setup>
import { ref } from 'vue'

defineProps({
    color: String
})

</script>

<template>
    <button
        type="button"
        :class="color"
        class="w-max h-max border rounded border-solid px-4 py-2 text-gray-800 uppercase">
        Add count
    </button>
</template>
