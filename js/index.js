/*******************************************
Author: Mariana Azevedo
Since: 06/08/2016
*******************************************/
(function (){

  var app = angular.module('app', []);

  app.controller('PageCtrl', function ($scope, $window) {

	  	$scope.init = function(){
	  		$scope.callback();
	  	};
	      
	    $scope.callback = function(){
			$('.item-skills').each(function(){
				newWidth = $(this).parent().width() * $(this).data('percent');
				$(this).width(0);
			    $(this).animate({
			        width: newWidth,
			    }, 1000);
				});
				$('.icons-blue').each(function(){
					height = $(this).height();
			    $(this).animate({
			        height: 14,
			    }, 2000);
			});
		};

		var resize;
		window.onresize = function() {
			clearTimeout(resize);
			resize = setTimeout(function(){
				$scope.callback();
			}, 100);
		};

		$scope.goToLinkedIn = function(){
			document.location.assign("https://www.linkedin.com/in/mariana-de-azevedo-santos-1a126321");
		};

		$scope.goToGithub = function(){
			document.location.assign("https://github.com/mariazevedo88");
		};

		$scope.sendMail = function(){
    		$window.location.href = "mailto:mariana@bsi.ufla.br";
    	};
   });
  
})();