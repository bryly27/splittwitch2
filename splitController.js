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

	$('.nav-pills a').each(function(){
		$(this).click(function(){
			$('.nav-pills li').each(function(){
				$('.nav-pills li').removeClass('active');
			})
			$(this).parent().addClass('active');
		})
	})

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





	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-61671565-9', 'auto');
	ga('send', 'pageview');










});