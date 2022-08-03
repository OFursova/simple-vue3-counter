<template>
    <!--
    1. Зробити вивід коментарів (https://jsonplaceholder.typicode.com/comments)
    2.  Додати фільтр по коментарях
    3. Додати форму створення коммента
    4. Додати можливість видалення коммента
     Фетчете дані один раз усі інші маніпуляції робите на фронті
     -->
    <div class="flex items-center justify-center w-full">
        <div v-if="active">
            ...loading
        </div>
        <div v-else class="flex flex-col items-center justify-center w-full">
            <post-card v-for="({id, title, body}) in posts"
                       :title="title"
                       :body="body"
                       :id="id"
                       :key="id"
                       @remove="onRemovePost"
            />
        </div>
    </div>
</template>

<script>
import api from "../../services/api.js";
import {computed, onMounted, ref} from "vue";
import Button from "../components/Button.vue";
import PostCard from "../components/PostCard.vue";
import useToggle from "../../composables/useToggle.js";

export default {
    name: "Comments.vue",
    components: { Button, PostCard },
    props: {},
    emits: [],

    setup(props, {emit}) {
        const [active, toggle] = useToggle();
        const posts = ref([]);

        const fetchPosts = async () => {
            try {
                const res = await api.get('/posts');
                posts.value = res.data
            } catch (e) {
                console.log(e)
            } finally {

            }
        };

        const onRemovePost = (id) => {
            posts.value = posts.value.filter(post => post.id !== id);
        }

        onMounted(() => {
            fetchPosts();
        })

        return {
            active,
            toggle,
            posts,
            onRemovePost,
        }
    }
}
</script>

<style scoped>

</style>
