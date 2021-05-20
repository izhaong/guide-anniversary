<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 15:34:40
-->
<template>
  <div class="home_container" :style="{backgroundImage:`url(${config.img})`}">
  <!-- <div class="home_container" > -->
    <section @click="navTo(left)"></section>
    <section @click="navTo(right)"></section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      config: {},
      left: {},
      right: {}
    }
  },
  mounted () {
    const subject = JSON.parse(window.localStorage.getItem('subject'))
    this.config = subject && subject.length && subject[1]
    const machineID = window.localStorage.getItem('machineID')
    const configArr = this.config.children && this.config.children.filter(v => (v.position === machineID))
    if (configArr.length !== 2) return this.$toast('主题页面配置不完整')
    this.left = configArr[0]
    this.right = configArr[1]
  },
  methods: {
    navTo (direct) {
      // this.$router.push('/secPage/1')
      this.$router.push({ name: 'SecPage', params: direct })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.home_container {
  @include fullBgi();
  display: flex;
  flex-direction: row;
  section {
    height: 100%;
    width: 50%;
  }
}
</style>
