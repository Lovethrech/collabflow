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
                <div class="auth-form-label-and-input-ctn">
                    <label for="email">
                        Email:
                    </label>
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Email address"
                        requires
                    />
                </div>
                <div class="auth-form-label-and-input-ctn">
                    <label for="password">
                        Password:
                    </label>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Password"
                        requires
                    />
                </div>
                <button type="submit" class="btn btn-primary" :disables></button>
            </form>
        </div>
    </div>
</template>