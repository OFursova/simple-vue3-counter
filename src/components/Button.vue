<script setup>

import {computed} from "vue";

const props = defineProps({
    title: String,
    color: {
        type: String,
        validator: (val) => ['red', 'yellow', 'green'].includes(val)
    },
    add: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    },
})

const btnColor = computed(() => {
    if (props.add) {
        return ({
            'red': 'bg-red-500',
            'green': 'bg-green-500',
            'yellow': 'bg-yellow-500'
        })[props.color] || 'bg-blue-500'
    }
    return ({
        'red': 'bg-red-700',
        'green': 'bg-green-700',
        'yellow': 'bg-yellow-700'
    })[props.color] || 'bg-blue-700'
})

</script>

<template>
    <button
        :type="props.type"
        :class="btnColor"
        class="w-max h-max border rounded border-solid px-4 py-2 m-4 text-gray-100 font-bold uppercase">
        {{ title }}
    </button>
</template>
