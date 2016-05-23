function config ($stateProvider, $urlRouterProvider) {

  // Re-routes all un-declared routes to home
  $urlRouterProvider.otherwise('/');

  // Defines states of our app ( routes )
  $stateProvider
    // The root state is the first state to load
    // and all nested states will load inside of this ( ui-view )
    .state('root', {
      abstract: true, // In place of `url`
      templateUrl: 'templates/layoutTemplate.html'
    })
    // Our home state, will show a list of our posts
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/homeTemplate.html',
      controller: 'HomeController as vm'
    })
    // Our upload state will have a form that will allow
    // us to upload a new post
    .state('root.upload', {
      url: '/upload',
      templateUrl: 'templates/uploadTemplate.html',
      controller: 'UploadController as vm'
    })
    // show a detail page of the image ( hard mode: edit / delete image options )
    .state('root.detail', {
      url: '/:id',
      templateUrl: 'templates/detailTemplate.html',
      controller: 'DetailController as vm'
    })
  ;
}

// The $inject property is used internally by AngularJS to
// properly inject dependenices into our controller/config etc
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
