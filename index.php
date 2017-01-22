<!DOCTYPE html>
<html ng-app="trippybaba">
  <body ng-cloak="">
    <title>Trippy Baba</title>
    <meta name="Description" content="Product Manager Web Application created with AngularJS and PHP">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/navbar.css" rel="stylesheet">
    <link href="css/home.css" rel="stylesheet">

    <div class="page-content">
      <div ng-view="" id="ng-view"></div>
    </div>

    <!-- Libraries -->
    <script type="text/javascript" src="js/angular.min.js"></script>
    <script type="text/javascript" src="js/angular-route.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>


    <!-- AngularJS custom codes -->
    <script src="app/app.js"></script>
    <script src="app/data.js"></script>
    <script src="app/directives.js"></script>


    <script>
    $(document).ready(function() {
      // This command is used to initialize some elements and make them work properly
      $.material.init();
    });
    </script>
  </body>
</html>
