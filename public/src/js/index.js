angular.module('noweibo.service', [])

angular.module('noweibo.directive', []).directive('comShortUrl', function factory($timeout) {
  return function postLink(scope, iElement, iAttrs) {
    var anchor = function () {
      var shortUrl = new RegExp('(http://t.cn/[a-zA-Z0-9]{4,9})', 'g')
      var linkTpl = '<a href="$1" target="_blank">$1</a>'

      iElement.html(iElement.text().replace(shortUrl, linkTpl))
    }
    $timeout(anchor, 0)
  }
})

angular.module('noweibo.filter', []).filter('colorFilter', function () {
  return function (input, flag) {
    var colorClasses = ['text-success', 'text-primary', 'text-warning', 'text-danger']
    var colorClass = null
    if (input < 50) {
      colorClass = 'text-success'
    } else if (input < 100) {
      colorClass = 'text-primary'
    } else if (input < 300) {
      colorClass = 'text-warning'
    } else {
      colorClass = 'text-danger'
    }

    return '<span class="' + colorClass + '">' + input + '</span>'
  }
})

window.APP = angular.module(
    'noweiboIndex',
    ['noweibo.service', 'noweibo.directive', 'noweibo.filter']
  )

APP.controller('AppCtrl', [
  '$scope', '$http', '$timeout', '$location',
  function ($scope, $http, $timeout, $location) {
    $scope.weibos = []

    $scope.queryWeibo = function () {
      $http({ method: 'GET', url: '/weibo/public' }).success(function (data, status, headers, config) {
        if (data['status'] === 'OK') {
          $scope.weibos = data['data']
        }
      }).error(function (data, status, headers, config) {
        console.log(status)
      })
    }

    var interval = setInterval(function () {
      $scope.queryWeibo()
    }, 60 * 1000)

    $timeout(function () {
      var hash = $location.search()
      var message = ''

      if (hash['message'] && typeof hash['message'] === 'string') {
        message = hash['message']
      } else {
        message = '由于新浪微博屏蔽了个人开发者对数据类应用的审核申请，本站目前仅供开发人员测试，请谅解'
      }

      $('.jumbotron-append p').html(message)
      $('.jumbotron-append')
        .fadeIn(500)
        .delay(5000)
        .fadeOut(500, function () {
          $('.jumbotron-append p').html()
        })

      $location.search('message', null)
      $scope.queryWeibo()
    }, 0)
  }
])

