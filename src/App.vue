<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-21 17:00:26
-->
<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <transition name="fade" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AppMain',
  data () {
    return {
      outTime: new Date().getTime()
    }
  },
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key () {
      return this.$route.path
    }
  },
  mounted () {
    const overTime = 1000 * 60 * 5
    setInterval(() => {
      if (new Date().getTime() - this.outTime >= overTime) {
        const name = 'StartUp'
        if (this.$route.name !== name) {
          this.$router.push({ name })
        }
      }
      // console.log(new Date().getTime() - this.outTime)
    }, overTime) //  1000 * 60 * 5)
    document.addEventListener('click', (e) => {
      this.outTime = new Date().getTime()
    })
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
