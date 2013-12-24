function MyCtrl($scope, $timeout){

	$scope.progress = 0;

	var DOTS = '....................................................................................................';
	var PIPES = '||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||';

	$scope.progress_bar = function (){
		return '[' + PIPES.substring(0, $scope.progress) + DOTS.substring(0, 100 - $scope.progress) + ']'
	}

	function tick(){
		if($scope.progress < 100){
			$scope.progress++;
			$timeout(tick, 50);
		}
	}

	$scope.start = function(){
        $timeout(tick, 0);
	}
}