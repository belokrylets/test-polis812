<template>
    <div class="user">
        <div class="id">{{ user.id }}.</div>
        <div class="name">{{ user.name }}</div>
        <button @click="$router.push(`/${user.id}/albums`)"> Альбомы</button>
        <button @click="$router.push(`/${user.id}/posts`)">Посты</button>
    </div>
</template>
<script>
export default {
    name: 'User',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
}
</script>

