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

// Todo: ці кольори краще булоб перенести в кноку в кнопці можна додати пропси з варіативністью

const addColor = computed(() => {
  return ({
    'red': 'bg-red-500',
    'green': 'bg-green-500',
    'yellow': 'bg-yellow-500'
  })[props.color] || 'bg-blue-500'
})

const removeColor = computed(() => {
  return ({
    'red': 'bg-red-700',
    'green': 'bg-green-700',
    'yellow': 'bg-yellow-700'
  })[props.color] || 'bg-blue-700'
})

/*
Todo: В функції збільшення та зменшення трохи неправильна логіка виходить що
  якщо крок не ціле число а миксимальне значення ціле то ти ніколи не зможешь встановити максимум чи мінімум

  const addCount = () => {
  const newVal = count.value + props.step; //parseInt(count.value) + parseInt(props.step);
  count.value = newVal > props.max ? props.max : newVal;
}

const removeCount = () => {
  const newVal =  count.value - props.step
  count.value = newVal < props.min ? props.min : newVal
}

 */

const addCount = () => {
    if (count.value <= props.max - props.step) {
        count.value = count.value + props.step; //parseInt(count.value) + parseInt()
    }
}

const removeCount = () => {
    if (count.value >= props.min + props.step) {
        count.value = count.value - props.step
    }
}
</script>

<template>
    <div class="flex flex-col items-center p-4 m-2 w-3/12 h-max border rounded border-solid bg-gray-200">
        <h2 class="text-3xl">Current count is: {{ count }}</h2>
        <p class="text-lg text-gray-500">This counter's interval is {{ min }} to {{ max }} step is {{ step }}</p>
        <div class="flex">
            <Button :class="addColor" @click="addCount" title="add"/>
            <Button :class="removeColor" @click="removeCount" title="remove"/>
        </div>
    </div>
</template>
