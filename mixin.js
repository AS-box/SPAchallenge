var Sharable = {
  data: function () {
    return {
      _isProcessing:false
    }
  },
  created: function () {
    console.log('sharrableミックスインのフックが呼ばれました')
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('シェアしますか？')) {
        return
      }
      this._isProcessing = true
      setTimeout(() => {
        window.alert('シェアしました')
        this._isProcessing = false
      },300)
    }
  }
}

var LogoShareButton = {
  mixins:[Sharable],
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `,
  created: function () {
    console.log('LogoShareButtonのフックが呼ばれました')
  }
}

var TextShareButton = {
  mixins:[Sharable],
  template: `
    <button @click='share'>{{ buttonLabel }}</button>
  `,
  data: function () {
    return {
      buttonLabel: 'シェアする',
    }
  },
  created: function () {
    console.log('TextShareButtonのフックが呼ばれました')
  },
  methods: {
    share() {
      window.alert('コンポーネントからシェアしました')
    }
  }
}

new Vue({
  el: '#app',
  components: {
    LogoShareButton,
    TextShareButton
  }
})