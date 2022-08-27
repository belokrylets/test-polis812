<template>
    <div class="photos">
        <div class="id">{{ photo.id }}.</div>
        <div class="title">{{ photo.title }}</div>
        <div class="thumbnailUrl">{{ photo.thumbnailUrl }}</div>
    </div>
</template>
<script>
export default {
    name: 'Photos',
    props: {
        post: {
            type: Object,
            required: true
        }
    },

}
</script>
