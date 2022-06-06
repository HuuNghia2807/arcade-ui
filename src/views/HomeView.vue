<template>
  <div class="container">
    <HeadingHome />
    <BestSellers />
  </div>
</template>

<script>
import { HeadingHome, BestSellers } from './components'
export default {
  components: {
    HeadingHome,
    BestSellers
  }

}
</script>

<style lang="scss" scoped>
.container {
  min-height: 1000px;
}

</style>
