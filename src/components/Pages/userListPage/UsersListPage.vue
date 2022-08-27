<template>
    <div class="users_list_page">
        <div class="container">
            <div class="users_list_content">
                <User v-for='user in $store.getters.getAllUsers' :user="user" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UsersListPage',

    mounted() {
        this.$store.dispatch('fetchUsers')
    },
    methods: {
    }
}
</script>
