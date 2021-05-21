<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-21 15:55:39
-->
<template>
  <bottomLayout>
    <img slot="header" src="@/assets/images/理论学习教育.png" alt="" height="100px" width="100%">
    <div class="page_content">
      <section v-for="(item, index) in articleList" :key="index" class="item_wrapper" @click="navToDetail(item.id)">
        <div class="top">
          <h2 class="title line-3" :style="{width: item.coverImage ? '240px': 'auto'}">{{item.title}}</h2>
          <img :src="item.coverImage" v-if="item.coverImage" height="56px" width="86px" alt="">
        </div>
        <p>
          {{item.created}}
        </p>
      </section>
    </div>
  </bottomLayout>
</template>

<script>
import { getArticleList } from '@/api/index'
import bottomLayout from '@/components/bottomLayout'
export default {
  components: { bottomLayout },
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
    navToDetail (id) {
      this.$router.push('/article/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin";

.page_content {
  // @include fullBgi("~@/assets/bgi/微信图片_202105171358441.jpg");
  padding: 16px;
  box-sizing: border-box;
  .item_wrapper {
    border-bottom: 1px solid #f88;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      .title {
        font-weight: bold;
        color: #333;
        font-size: 14px;
        margin: 0;
        line-height: 1.3;
      }
    }
    p {
      color: #999;
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>
