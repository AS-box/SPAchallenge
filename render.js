const MyButton = {
  props: ['href', 'tag'],
  template: `
    <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
      <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
      <slot></slot>
    </span>
    <button v-else>
      <slot></slot>
    </button>
  `
}
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(MyButton, {
      attrs: {
        href: 'https://jp.vuejs.org/index.html'
      },
      props: {
        tag: 'a'
      },
    }, 'anchor')
  // },
  // components: {
  //   MyButton:MyButton
  }
})