<template>
<SignupSignin />
</template>

<script>
// @ is an alias to /src
import SignupSignin from '@/components/SignupSignin.vue'

export default {
    name: 'Home',
    components: {
        SignupSignin
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}

#ss {
    font-family: tahoma;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
