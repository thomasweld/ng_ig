function HomeController ($http, SERVER) {

  let vm = this;

  // List of methods on our instance
  // vm.toggleComplete = toggleComplete;
  //

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

}

HomeController.$inject = ['$http', 'SERVER'];
export { HomeController };
