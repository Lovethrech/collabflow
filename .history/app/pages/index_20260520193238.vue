<script setup>
const title = 'Auth | Chel CollabFlow'
const description = ''

useSeoMeta({
    title,
    description
})
</script>

<template>
    <div class="auth-page flex-center-center">
        <div class="auth-card">
            <div class="auth-title-ctn flex-row">
                <img src="/ChelModernLogo.svg" alt="">
                <h1>CollabFlow</h1>
            </div>
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
                <button type="submit" class="btn btn-primary" :disabled="loading">
                    {{loading? "Signing in ..." : "Sign In"}}
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.auth-page{
    width: 100%;
    height: 100vh; 
}
.auth-card{
    background-color: #0000007e;
    width: 60%;
    padding: 2vh;
}
.auth-title-ctn{
    justify-content: center;
}
.auth-title-ctn img{
    width: 10vh;
}
.auth-title-ctn h1{
    
}
</style>