<template>
    <div class="posts_list_page">
        <div class="container">
            <div class="posts_list_content">
                <h2>Посты пользователя</h2>
                <div class="posts_list">
                    <Post v-for='post in $store.getters.getAllPosts' :post="post" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PostsPage',

    mounted() {
        this.$store.dispatch('fetchPosts', this.$route.params.id)
    },
    methods: {
    }
}
</script>
