(function() {
  'use strict';

  angular
    .module('web')
    .controller('MainController', MainController);

  MainController.$inject = ['$timeout', 'toastr', 'Restangular', 'Lightbox'];

  /** @ngInject */
  function MainController($timeout, toastr, Restangular, Lightbox) {
    var vm = this;

    vm.Imagesss = [];

    activate();

    function getImages() {
      Restangular
      .one('api/?key=5046360-1b01f7d3ca7984c3e5ce8c7f8')
      .get()
      .then(function (response) {
        response.data.hits.forEach(function (hit) {
          vm.Imagesss.push({
            'thumbUrl':hit.previewURL,
            'url':hit.webformatURL
          })
        });
      })
      .catch(function (err) {
        console.log(err);
      });
    }

    vm.openLightBox = openLightBox;
    function openLightBox(idx) {
      Lightbox.openModal(vm.Imagesss, idx);
    }

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      getImages();
    }
  }
})();
