<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 16:26:12
-->
<template>
  <div class="page_container" @click="navTo('test')">
    <!-- <h1>This is an about page</h1> -->
    <section v-for="(item, index) in articleList" :key="index" class="item_wrapper">
      <h2>{{item.title}}</h2>
      <p>
        <span>2021年5月20日</span>
      </p>
    </section>
  </div>
</template>

<script>
import { getArticleList } from '@/api/index'
export default {
  name: 'Item',
  data () {
    return {
      articleList: []
    }
  },
  mounted () {
    getArticleList().then(res => {
      this.articleList = res.items
    })
  },
  methods: {
    navTo () {
      this.$router.push('/article/1')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin";

.page_container {
  // @include fullBgi("~@/assets/bgi/微信图片_202105171358441.jpg");
  padding: 20px;
  box-sizing: border-box;
  .item_wrapper {
    border: 1px solid #F88;
    padding: 10px;
    h2 {
      color: #F00;
    }
  }
}
</style>
