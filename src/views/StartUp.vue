<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 14:06:48
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 15:36:38
-->
<template>
  <div class="startUp_container" :style="{backgroundImage:`url(${config.img})`}" @click="handleNext">
  </div>
</template>

<script>
export default {
  name: 'StartUp',
  data () {
    return {
      config: {}
    }
  },
  mounted () {
    const subject = JSON.parse(window.localStorage.getItem('subject'))
    this.config = subject && subject.length && subject[0]
  },
  methods: {
    handleNext () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";
.startUp_container {
  @include fullBgi();
}
</style>
