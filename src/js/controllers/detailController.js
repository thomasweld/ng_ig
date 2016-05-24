
function DetailController ($http, SERVER, $stateParams, $state) {

  console.log(SERVER.URL);
  // Since we are using ControllerAs syntax and they are being
  // instantiated we need to use the `this` keyword.
  // However to keep things lined up, we assign that to `vm`
  let vm = this;
  console.dir(vm);
  // let id = vm.post.id;
  // console.log(id);

  vm.init = init;
  vm.deletePost = deletePost;

  init();

  function init() {
   $http.get(SERVER.URL + 'post/' + $stateParams.id, { headers: SERVER.HEADERS }).then( (res) => {
     vm.post = res.data;
   });
  }

  function deletePost ( id ) {
    $http.delete(SERVER.URL + 'post/' + $stateParams.id, { headers: SERVER.HEADERS }).then( (res) => {
      $state.go('root.home');
    });
  }

}

DetailController.$inject = ['$http', 'SERVER', '$stateParams', '$state'];
export { DetailController };
