function HomeController ($http, SERVER, $timeout) {

  let vm = this;

  // List of methods on our instance
  vm.like = like;

  vm.isShown = false;

  // Calls our Init Function
  // Best practice to wrap things we want to happen
  // right away inside of an `init` function and then
  // call it when we are ready
  init();

  function init() {
   $http.get(SERVER.URL + 'post', { headers: SERVER.HEADERS }).then( (res) => {
     console.log(res);
    vm.postList = res.data.data;
   });
  }

  function like( post ) {

    post.likes = ++post.likes;

    $http.put(SERVER.URL + 'post/' + post.id, post, { headers: SERVER.HEADERS }).then( (res) => {
      console.log(res.status);
      if ( res.status === 200 ) {
        vm.isShown = true;
      }

      $timeout(function () {
        vm.isShown = false;
        console.log(vm.isShown);
      }, 1000);

    });

  }

}

HomeController.$inject = ['$http', 'SERVER', '$timeout'];
export { HomeController };
