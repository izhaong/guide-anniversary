<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 16:01:04
-->
<template>
  <div class="page_container">
    <!-- <h1>This is an about page</h1> -->
    <section class="item_wrapper" v-for="(nav, index) in navs" :key="index" @click="navTo(nav.id)">
      {{nav.name}}
    </section>
    <section class="handle_bar">
      <span @click="$router.go(-1)"></span>
      <span @click="$router.replace('/')"></span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SecPage',
  data () {
    return {
      navs: {}
    }
  },
  mounted () {
    const config = this.$route.params
    if (Object.keys(config).length === 0) return this.$router.go(-1)
    this.navs = config.children
    if (this.navs.length === 0) return this.$toast('请配置完整导航')
  },

  methods: {
    navTo (id) {
      this.$router.push('/items/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.page_container {
  @include fullBgi("~@/assets/images/secpage_wrapper.png");
  padding-top: 110px;
  padding-bottom: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  .handle_bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    z-index: 2;
    & > span {
      width: 50%;
    }
  }
  .item_wrapper {
    background-image: url("~@/assets/images/item.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: center;
    width: 280px;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-stretch: normal;
    font-size: 20px;
    letter-spacing: 0px;
    color: #efc17e;
  }
}
</style>
