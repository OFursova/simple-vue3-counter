<template>
    <div class="flex flex-col items-center justify-around w-9/12 border border-solid rounded p-4 m-4">
        <h2 class="font-bold text-2xl">{{ title }}</h2>
        <p>{{ body }}</p>
        <Button @click="onRemove" color="red" type="submit" title="remove" class="self-end"/>
        <div class="flex flex-col items-center justify-around w-9/12 p-4 m-4">
            <h2 class="font-bold text-2xl self-start">Comments</h2>
            <comment-card v-for="({id, name, email, body}) in preparedComments"
                          :name="name"
                          :email="email"
                          :body="body"
                          :key="id"
                          @delete="onRemoveComment(id)"
            />
        </div>
        <create-comment-form @add="onAddComment($newComment)"/>
<!--        <comment-card @add="onAddComment($newComment)" />-->
    </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import api from "../../services/api";
import Button from "../components/Button.vue";
import CommentCard from "../components/CommentCard.vue";
import CreateCommentForm from "./CreateCommentForm.vue";

export default {
    name: "PostCard",
    components: {CreateCommentForm, Button, CommentCard },
    props: {
        id: Number,
        title: String,
        body: String,
    },
    emits: ['remove'],

    setup(props, {emit}) {
        const comments = ref([]);

        const fetchComments = async () => {
            try {
                const res = await api.get('posts/'+props.id+'/comments');
                comments.value = res.data
            } catch (e) {
                console.log(e)
            } finally {

            }
        };

        const preparedComments = computed(() => comments.value.filter(({name}) => name.length > 30))

        onMounted(() => {
            fetchComments();
        })

        const onRemove = () => {
            emit('remove')
        }

        const onRemoveComment = (id) => {
            comments.value = comments.value.filter(comment => comment.id !== id);
        }

        const onAddComment = (newComment) => {
            console.log(newComment)
            // comments.value = comments.value.push({id: 1000, name: 'bla', email: 'bla', comment: 'qwerty'});
        }

        return {
            onRemove,
            onRemoveComment,
            onAddComment,
            comments,
            preparedComments
        }
    }
}
</script>

<style scoped>

</style>
