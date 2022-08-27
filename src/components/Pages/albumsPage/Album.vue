<template >
    <div class="album">
        <div class="id">{{ album.id }}.</div>
        <div class="title">{{ album.title }}</div>
        <Photos />
    </div>
</template>
<script>
export default {
    name: "Album",
    props: {
        album: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch("fetchPhotos", this.props.album.id);
    },
}
</script>
