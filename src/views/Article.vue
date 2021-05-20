<!--
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 14:08:29
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-19 14:51:12
-->

<template>
  <div class="px-10" v-html="str">
    rich text
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      str: "<p style=\"text-align: center; font-size: 15px;\"><img title=\"TinyMCE Logo\" src=\"../../../images/glyph-tinymce@2x.png\" alt=\"TinyMCE Logo\" width=\"110\" height=\"97\" /></p>\n<h2 style=\"text-align: center;\">Welcome to the TinyMCE Cloud demo!</h2>\n<p>Please try out the features provided in this full featured example (excluding <a href=\"../../../apps/\">Premium Plugins</a> ).</p>\n<h2>Got questions or need help?</h2>\n<ul>\n<li>Our <a class=\"mceNonEditable\" href=\"../../\">documentation</a> is a great resource for learning how to configure TinyMCE.</li>\n<li>Have a specific question? Try the <a href=\"https://stackoverflow.com/questions/tagged/tinymce\" target=\"_blank\" rel=\"noopener\"><code>tinymce</code> tag at Stack Overflow</a>.</li>\n<li>We also offer enterprise grade support as part of <a href=\"../../../pricing\">TinyMCE premium plans</a>.</li>\n</ul>\n<h2>A simple table to play with</h2>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n<thead>\n<tr>\n<th>Product</th>\n<th>Cost</th>\n<th>Really?</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>TinyMCE Cloud</td>\n<td>Get started for free</td>\n<td>YES!</td>\n</tr>\n<tr>\n<td>Plupload</td>\n<td>Free</td>\n<td>YES!</td>\n</tr>\n</tbody>\n</table>\n<h2>Found a bug?</h2>\n<p>If you think you have found a bug please create an issue on the <a href=\"https://github.com/tinymce/tinymce/issues\">GitHub repo</a> to report it to the developers.</p>\n<h2>Finally ...</h2>\n<p>Don't forget to check out our other product <a href=\"http://www.plupload.com\" target=\"_blank\" rel=\"noopener\">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>\n<p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br />All the best from the TinyMCE team.</p>"
    }
  },
  mounted () {
    this.getConfig().then(res => {
      console.log(res)
      // const aa = ''
    })
  }
}
</script>
