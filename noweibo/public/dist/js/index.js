/*! noweibo - v0.0.1 - 2013-10-06
* http://noweibo.com
* Copyright (c) 2013 Codeb Fan; */
angular.module("noweibo.service",[]),angular.module("noweibo.directive",[]).directive("comShortUrl",function($timeout){return function(a,b){var c=function(){var a=new RegExp("(http://t.cn/[a-zA-Z0-9]{4,9})","g"),c='<a href="$1" target="_blank">$1</a>';b.html(b.text().replace(a,c))};$timeout(c,0)}}),angular.module("noweibo.filter",[]).filter("colorFilter",function(){return function(a){var b=null;return b=50>a?"text-success":100>a?"text-primary":300>a?"text-warning":"text-danger",'<span class="'+b+'">'+a+"</span>"}}),window.APP=angular.module("noweiboIndex",["noweibo.service","noweibo.directive","noweibo.filter"]),APP.controller("AppCtrl",["$scope","$http","$timeout","$location",function($scope,$http,$timeout,a){$scope.weibos=[],$scope.queryWeibo=function(){$http({method:"GET",url:"/weibo/public"}).success(function(a){"OK"===a.status&&($scope.weibos=a.data)}).error(function(a,b){console.log(b)})},setInterval(function(){$scope.queryWeibo()},6e4),$timeout(function(){var b=a.search(),c="";c=b.message&&"string"==typeof b.message?b.message:"由于新浪微博屏蔽了个人开发者对数据类应用的审核申请，本站目前仅供开发人员测试，请谅解",$(".jumbotron-append p").html(c),$(".jumbotron-append").fadeIn(500).delay(5e3).fadeOut(500,function(){$(".jumbotron-append p").html()}),a.search("message",null),$scope.queryWeibo()},0)}]);