<template>
    <div class="main__layout">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import { Header, Footer } from './components'
    export default {
        setup() {

        },
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="sass" scoped>

</style>