<template>
    <div class="flex items-center justify-center min-w-full">
        <form @submit.prevent="onSubmit" action="" class="flex flex-col items-center justify-center w-6/12 border border-solid rounded p-4">
            <h4>Add new comment</h4>
            <input
                v-model="form.name"
                placeholder="Name"
                type="text"
                class="w-9/12 h-max border rounded border-solid px-4 py-2 m-2 bg-gray-200" />
            <input
                v-model="form.email"
                placeholder="Email"
                type="text"
                class="w-9/12 h-max border rounded border-solid px-4 py-2 m-2 bg-gray-200" />
            <input
                v-model="form.comment"
                placeholder="Type your comment here"
                type="text"
                class="w-9/12 h-max border rounded border-solid px-4 py-2 m-2 bg-gray-200" />
            <Button color="green" type="submit" title="send"/>
        </form>
    </div>
</template>

<script>
import {ref} from "vue";
import Button from "./Button.vue";
import BaseInput from "./BaseInput.vue";

const initialValues = {
    comment: '',
    email: '',
    name: '',
}

export default {
    name: "CreateCommentForm",
    components: {BaseInput, Button },
    emits: ['add'],

    setup(props, {emit}) {
        const form = ref(initialValues);

        const onSubmit = () => {
            emit('add', form.value)
            // api.post('/comments', form.value)
        };

        return {
            form,
            onSubmit,
        }
    }
}
</script>

<style scoped>

</style>
