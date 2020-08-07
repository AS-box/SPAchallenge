//グローバルディレクティブ※第一引数はディレクティブの名前、第二引数が振る舞い
Vue.directive('fallback-image', {
  //bindはフック関数の一つ。引数は'el:ディレクティブが紐づく要素'、'binding:紐づいているオブジェクト、vnode、oldVlue'
  bind: function (el, binding) {
    console.log('bind', binding)
    let once = binding.modifiers.once//修飾子
    el.addEventListener('error', function onError() {
      //値として指定されたno imageのURLをimg要素のsrc属性値として設定する
      el.src = binding.value
      if (once) {
        el.removeEventListener('error', onError)
      }
    })
  },
  update: function (el, binding) {
    console.log('update', binding)
    //bindingのもつプロパティの１つにoldValueとvalueがある。
    if (binding.oldValue !== binding.value && binding.oldValue === el.src) {
      el.src = binding.value
    }
  }
})

const vm = new Vue({
  el: '#app',
  data: function () {
    return {
      altText: 'logo',
      noImageURL:'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
    }
  }
})