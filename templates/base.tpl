<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta property="wb:webmaster" content="95df95f37d38eb48" />
    <title>{{ head_title }}</title>
    <meta name="description" content"{{ head_description }}">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="/public/css/bootstrap.css">
    <link rel="stylesheet" href="/public/css/bootstrap-theme.css">
    {% block css %}{% end %}

    <script src="/public/js/vendor/modernizr-2.6.2.min.js"></script>
  </head>
  <body ng-app="{{ angular_module }}" ng-controller="AppCtrl">
    <!--[if lt IE 9]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

    {% block body %}{% end %}

    <script src="/public/js/vendor/jquery-2.0.3.min.js"></script>
    <script src="/public/js/vendor/angular-1.0.8.min.js"></script>
    <script src="/public/js/bootstrap.js"></script>
    <script src="/public/js/plugins.js"></script>
    {% block js %}{% end %}

    {% include "ga.tpl" %}
  </body>
</html>
