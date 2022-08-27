<template>
    <header class="header">
        <div class="container">
            <div class="header-body">
                <nav class="header-menu">
                    <ul class="menu-list">
                        <li class="menu-item ">
                            <router-link class="nav-link" to="/">Список пользователей</router-link>
                        </li>
                        <li class="menu-item ">
                            <router-link class="nav-link" to="/about">О сайте</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'my-navbar'
}
</script>
