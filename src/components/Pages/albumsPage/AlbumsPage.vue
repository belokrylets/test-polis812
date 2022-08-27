<template>
    <div class="albums_list_page">
        <div class="container">
            <div class="posts_list_content">
                <h2>Альбомы пользователя</h2>
                <div class="albums_list">
                    <Album v-for='album in $store.getters.getAllAlbums' :album="album" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlbumsPage',
    mounted() {
        this.$store.dispatch('fetchAlbums', this.$route.params.id)

    }
}
</script>
