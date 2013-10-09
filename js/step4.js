function MyCtrl($scope){

	$scope._delta = function(){
		return $scope.b * $scope.b - 4 * $scope.a * $scope.c;
	}

	$scope.delta = function(a, b, c){
		return b*b - 4*a*c;
	}

	$scope.r1 = function(){
		return (-$scope.b + Math.sqrt($scope._delta())) / (2 * $scope.a)
	}

	$scope.r2 = function(){
		return (-$scope.b - Math.sqrt($scope._delta())) / (2 * $scope.a)
	}

	$scope.meutexto_reversed = function(){
		return $scope.meutexto.split("").reverse().join("")
	}
}