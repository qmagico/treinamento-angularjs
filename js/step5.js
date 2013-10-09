function MyCtrl($scope){

	$scope.angle = 0;

	$scope.vai = function(){
		$scope.angle += 30;
		while($scope.angle >= 360){
			$scope.angle -= 360;
		}
	}
	$scope.volta = function(){
		$scope.angle -= 30;
		while($scope.angle < 0){
			$scope.angle += 360;
		}
	}
}