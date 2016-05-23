function UploadController ($http, SERVER, $state) {

  // Since we are using ControllerAs syntax and they are being
  // instantiated we need to use the `this` keyword.
  // However to keep things lined up, we assign that to `vm`
  let vm = this;

  vm.uploadPost = uploadPost;

  // Here are all of the functions referenced above

  function uploadPost (post) {

    post.likes = 0;

    // Use $http to make a post request to our server
    $http.post(SERVER.URL + 'post', post, { headers: SERVER.HEADERS }).then( (res) => {
      $state.go('root.home');
    });
  }

}

UploadController.$inject = ['$http', 'SERVER', '$state']; // **
export { UploadController };

// $http: Is a service provided by AngularJS that helps us do Ajax
// URL: Is a constant we registered on our "app" module
// $state: Is a service provided by UI Router that helps us update the state
