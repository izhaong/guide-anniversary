<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-21 15:30:57
-->
<template>
  <div class="bottomLayout_container">
    <slot name="header" />
    <section class="content">
      <slot />
    </section>
    <section class="handle_bar">
      <span @click="$router.go(-1)"></span>
      <span @click="$router.replace('/')"></span>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.bottomLayout_container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  .content {
    flex: 1;
    overflow: auto;
    background-color: #fff2d7;
  }
  .handle_bar {
    background-image: url("~@/assets/images/bottom.png");
    background-repeat: no-repeat;
    background-size: 100% 40px;
    background-origin: center;
    width: 100%;
    height: 40px;
    display: flex;
    z-index: 2;
    & > span {
      width: 50%;
    }
  }
}
</style>
