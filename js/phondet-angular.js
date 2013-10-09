var mod = angular.module('phondet', [])

mod.directive('phoneDetail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/phone-detail-13.html',
        scope: {
            title: '@',
            phone: '='
        },
        controller: function ($scope) {
            $scope.select_image = function(img){
                $scope.phone.selected_image = img;
            };
        }
    }
});
