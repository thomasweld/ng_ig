
function DetailController ($scope, $http, URL, $stateParams, $state) {

  // Since we are using ControllerAs syntax and they are being
  // instantiated we need to use the `this` keyword.
  // However to keep things lined up, we assign that to `vm`
  let vm = this;

  vm.init = init;
  vm.deletePost = deletePost;

  function init () {
    $http.get(URL + $stateParams.id).then( (res) => {
      $scope.singlePeep = res.data;
    });
  }

  deletePost = function (id) {
    $http.delete(URL + id).then( (res) => {
      $state.go('home');
    });
  }

}

DetailController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { DetailController };
