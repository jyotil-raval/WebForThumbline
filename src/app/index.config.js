(function() {
  'use strict';

  angular
    .module('web')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    RestangularProvider.setBaseUrl('https://pixabay.com/');
    RestangularProvider.setFullResponse(true);

    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
