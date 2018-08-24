angular.module("app", ["chart.js"]).controller("BaseCtrl",
    function ($scope, $element) {
        $scope.initFirstChart = function () {
            $scope.labels = ['Financial', 'Health', 'Spiritual'];
            $scope.data = [10, 20, 30];
            $scope.type = 'polarArea';

            var chartOptions = {
                scale: "off"
            };

            $scope.options = chartOptions;
            $scope.toggle = function () {
                $scope.type = $scope.type === 'polarArea' ? 'pie' : 'polarArea';
            };
        };

        $scope.initSecondChart = function () {
            $scope.labels2 = $scope.labels;
            $scope.data2 = $scope.data.slice();
        }

        $scope.hideSmallestValueOnSecondChart = function () {
            var smallestElementPosition = $scope.findSmallestElementOnGivenArray($scope.data2);
            $scope.data2[smallestElementPosition] = 0;
        }

        $scope.findSmallestElementOnGivenArray = function (givenArray) {
            var smallestValue = 9999999;
            var smallestElementPosition = -1;

            for (var i = 0; i < givenArray.length; i++) {
                if (givenArray[i] < smallestValue) {
                      smallestValue = givenArray[i];
                      smallestElementPosition = i;
                }
            }

            return smallestElementPosition;
        }

        $scope.initFirstChart();
        $scope.initSecondChart();

        $scope.hideSmallestValueOnSecondChart();
    }
);

