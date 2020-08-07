const MyButton = {
  // props: ['href', 'tag'],
  // render: function (createElement) {
  //   let tag = this.tag || (this.href ? 'a' : 'button')
    
  //   return createElement(tag, {
  //     attrs: {
  //       href: this.href || '#'
  //     },
  //   },this.$slots.default)
  //   }
  // }
  // template: `
  //   <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
  //     <slot></slot>
  //   </a>
  //   <span v-else-if="tag === 'span'">
  //     <slot></slot>
  //   </span>
  //   <button v-else>
  //     <slot></slot>
  //   </button>
  // `
}
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(my-button, {
      attrs:{
        href: 'https://jp.vuejs.org/index.html'
      },
      props: {
        tag:'a'
      },
    },'anchor')
  },
  components: {
    MyButton:MyButton
  }
})