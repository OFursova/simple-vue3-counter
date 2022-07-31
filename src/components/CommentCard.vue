<template>
    <div class="flex flex-col border border-solid rounded p-2 m-2 min-w-full">
        <h3 class="font-serif font-bold text-lg">{{name}}</h3>
        <span class="font-serif italic text-gray-500">{{email}}</span>
        <p class="font-serif">{{body}}</p>
        <Button @click="onDelete" color="red" add type="submit" title="delete" class="self-end"/>
    </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
    name: "CommentCard",
    components: { Button },
    props: {
        name: String,
        email: String,
        body: String
    },
    emits: ['delete'],

    setup(props, {emit}) {
        const onDelete = () => {
            emit('delete')
        }

        return {
            onDelete,
        }
    }
}
</script>

<style scoped>

</style>
