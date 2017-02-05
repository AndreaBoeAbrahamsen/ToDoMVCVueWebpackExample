import { Router } from 'director/build/director'

module.exports = function (vm){
  var router = new Router();
  ['all', 'active', 'completed'].forEach(function (visibility) {
    router.on(visibility, function () {
      vm.filter = visibility
    })
  })

  router.configure({
    notfound: function () {
      window.location.hash = ''
      vm.filter = 'all'
    }
  })
  router.init()
}
