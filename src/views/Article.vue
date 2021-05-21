<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 14:08:29
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-21 16:07:43
-->

<template>
  <bottomLayout>
    <div class="px-10" v-html="content">
    </div>
  </bottomLayout>
</template>

<script>
import bottomLayout from '@/components/bottomLayout'
import { getArticleList } from '@/api/index'

export default {
  name: 'Article',
  components: { bottomLayout },
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    const id = this.$route.params.id
    if (!id) return this.$router.go(-1)
    this.findArticleById(id)
  },
  methods: {
    findArticleById (id) {
      getArticleList().then(res => {
        const article = res.items.find(v => (v.id * 1 === id * 1))
        this.content = article && article.context
      })
    }
  }
}
</script>
