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
            <br/>
            <br/>
            <form @submit.prevent="">
                <div class="auth-form-label-and-input-ctn flex-column">
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
                <div class="auth-form-label-and-input-ctn flex-column">
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
                <br/>
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
    width: 40%;
    padding: 5vh;
}
.auth-title-ctn{
    justify-content: center;
}
.title-desc{
    text-align: center;
    letter-spacing: 2vh;
}
.auth-title-ctn img{
    width: 10vh;
}
.auth-form-label-and-input-ctn{
    margin: 2vh 0;
}
.auth-form-label-and-input-ctn input{
    background-color: transparent;
    color: #ffffff;
    padding: 1vh;
    font-size: 2.2vh;
    border:0;
    border-bottom: 0.1vh solid #ffffff;
}

@media screen and (max-width: 950px){
    .auth-card{
        width: 90%;
        padding: 5vh;
    }
    .auth-title-ctn{
        bg-color
        flex-direction: column;
    }
}
</style>