<template >
    <div class="post">
        <div class="id">{{ post.id }}.</div>
        <div class="name">{{ post.name }}</div>
        <div class="title">{{ post.title }}</div>
        <div class="body">{{ post.body }}</div>
    </div>
</template>
<script>
export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>
