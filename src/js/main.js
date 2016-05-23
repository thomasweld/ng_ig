// import dependencies
import angular from 'angular'
import 'angular-ui-router';

// Import Controllers
import { DetailController }      from './controllers/detailController';
import { HomeController } from './controllers/homeController';
import { UploadController }    from './controllers/uploadController';

// Import config file
import { config } from './config';

// Start Angular / declare a module for myApp
angular
  // Setter for a module (register)
  .module('app', ['ui.router'])
  // Register config file
  .config(config)
  // App URL Constant
  .constant('SERVER', {
    URL: 'https://api.backand.com/1/objects/',
    HEADERS: {
      AnonymousToken: 'f9a848f5-ad26-4ec0-b4fa-5d484ae3e4c9'
    }
  })
  // Register Controllers
  .controller('DetailController', DetailController)
  .controller('HomeController', HomeController)
  .controller('UploadController', UploadController)
  ;
