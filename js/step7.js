function MyCtrl($scope, $timeout){

	$scope.progress = 0;
    $scope.isRunning = false;


	var DOTS = '....................................................................................................';
	var PIPES = '||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||';
    var isRunning = true;

	$scope.progress_bar = function (){
		return '[' + PIPES.substring(0, $scope.progress) + DOTS.substring(0, 100 - $scope.progress) + ']'
	}

	function tick(){
		if($scope.progress < 100){
			$scope.progress++;
			$timeout(tick, 50);
            $scope.isRunning = true;
		} else {
            $scope.isRunning = false;
        }
	}

	$scope.start = function(){
        if(!$scope.isRunning)
            $timeout(tick, 0);
	}
}