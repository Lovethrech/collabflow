<script setup>
const title = 'Auth | Chel CollabFlow'
const description = ''

useSeoMeta({
    title,
    description
})
</script>

<template>
    <div class="auth-page">
        <div class="auth-card">
            <h1>CollabFlow</h1>
            <p class="title-desc">
                Real-time Team Workspace
            </p>
            <form @submit.prevent="">
                .a
                <input
                    v-model="email"
                    type="email"
                    placeholder="Email address"
                    requires
                />
            </form>
        </div>
    </div>
</template>