split.controller('splitController', function($scope, $sce, $cookies, $window){

	if($cookies.get('screenOne')){
		$scope.trustOneVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenOne');
		$scope.splitOneVid = $sce.trustAsResourceUrl($scope.trustOneVid);
		$scope.trustOneChat = "http://www.twitch.tv/" + $cookies.get('screenOne') + "/chat?popout=";
		$scope.splitOneChat = $sce.trustAsResourceUrl($scope.trustOneChat);
	}
	if($cookies.get('screenTwo')){
		$scope.trustTwoVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenTwo');
		$scope.splitTwoVid = $sce.trustAsResourceUrl($scope.trustTwoVid);
		$scope.trustTwoChat = "http://www.twitch.tv/" + $cookies.get('screenTwo') + "/chat?popout=";
		$scope.splitTwoChat = $sce.trustAsResourceUrl($scope.trustTwoChat);
	}
	if($cookies.get('screenThree')){
		$scope.trustThreeVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenThree');
		$scope.splitThreeVid = $sce.trustAsResourceUrl($scope.trustThreeVid);
		$scope.trustThreeChat = "http://www.twitch.tv/" + $cookies.get('screenThree') + "/chat?popout=";
		$scope.splitThreeChat = $sce.trustAsResourceUrl($scope.trustThreeChat);
	}
	if($cookies.get('screenFour')){
		$scope.trustFourVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenFour');
		$scope.splitFourVid = $sce.trustAsResourceUrl($scope.trustFourVid);
		$scope.trustFourChat = "http://www.twitch.tv/" + $cookies.get('screenFour') + "/chat?popout=";
		$scope.splitFourChat = $sce.trustAsResourceUrl($scope.trustFourChat);
	}


	$scope.submitOne = function(data){
		$cookies.put('screenOne', data);
		$scope.trustOneVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitOneVid = $sce.trustAsResourceUrl($scope.trustOneVid);
		$scope.trustOneChat = "http://www.twitch.tv/" + $cookies.get('screenOne') + "/chat?popout=";
		$scope.splitOneChat = $sce.trustAsResourceUrl($scope.trustOneChat);
	}

	$scope.submitTwo = function(data){
		$cookies.put('screenTwo', data);
		$scope.trustTwoVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitTwoVid = $sce.trustAsResourceUrl($scope.trustTwoVid);
		$scope.trustTwoChat = "http://www.twitch.tv/" + $cookies.get('screenTwo') + "/chat?popout=";
		$scope.splitTwoChat = $sce.trustAsResourceUrl($scope.trustTwoChat);
	}

	$scope.submitThree = function(data){
		$cookies.put('screenThree', data);
		$scope.trustThreeVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitThreeVid = $sce.trustAsResourceUrl($scope.trustThreeVid);
		$scope.trustThreeChat = "http://www.twitch.tv/" + $cookies.get('screenThree') + "/chat?popout=";
		$scope.splitThreeChat = $sce.trustAsResourceUrl($scope.trustThreeChat);
	}

	$scope.submitFour = function(data){
		$cookies.put('screenFour', data);
		$scope.trustFourVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitFourVid = $sce.trustAsResourceUrl($scope.trustFourVid);
		$scope.trustFourChat = "http://www.twitch.tv/" + $cookies.get('screenFour') + "/chat?popout=";
		$scope.splitFourChat = $sce.trustAsResourceUrl($scope.trustFourChat);
	}

	$scope.submitFive = function(data){
		$cookies.put('screenFive', data);
		$scope.trustFiveVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitFiveVid = $sce.trustAsResourceUrl($scope.trustFourVid);
		$scope.trustFiveChat = "http://www.twitch.tv/" + $cookies.get('screenFive') + "/chat?popout=";
		$scope.splitFiveChat = $sce.trustAsResourceUrl($scope.trustFiveChat);
	}

	$scope.submitSix = function(data){
		$cookies.put('screenSix', data);
		$scope.trustSixVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitSixVid = $sce.trustAsResourceUrl($scope.trustSixVid);
		$scope.trustSixChat = "http://www.twitch.tv/" + $cookies.get('screenSix') + "/chat?popout=";
		$scope.splitSixChat = $sce.trustAsResourceUrl($scope.trustSixChat);
	}

	$scope.chatbox = 1;

	$scope.showChat = function(data){
		$scope.chatbox = false;
		$scope.chatbox = data;
	}

	$('#clearAll').on('click', function(){
		$cookies.remove('screenOne');
		$cookies.remove('screenTwo');
		$cookies.remove('screenThree');
		$cookies.remove('screenFour');	
		$cookies.remove('screenFive');
		$cookies.remove('screenSix');	
		$window.location.reload();
	})

	$('form').hide();

	$('.channel').mouseenter(function(){
		$(this).find('form').fadeIn();
	}).mouseleave(function(){
		$(this).find('form').fadeOut();
	})



	

	var timeoutid = 0;
	$('body').mousemove(function() {
		$('nav').fadeIn();
    clearTimeout(timeoutid);
    timeoutid = setTimeout(hideMenu, 2000);
	});

	function hideMenu(){
		$('nav').fadeOut();
	};

	$scope.sideChat = true;

	$scope.toggleChat = function(){

		if($scope.sideChat === true){
			$scope.sideChat = false;
		}else{
			$scope.sideChat = true;
		}

		if($('.screens').hasClass('col-sm-9')){
			$('.screens').removeClass('col-sm-9');
			$('.screens').addClass('col-sm-12');	
		}else{
			$('.screens').removeClass('col-sm-12');
			$('.screens').addClass('col-sm-9');
		}

	};
















});