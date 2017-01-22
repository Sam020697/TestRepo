app.factory("Data", ['$http', '$location',
    function ($http, $q, $location) {

        var serviceBase = 'api/v1/';

        var obj = {};

        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        obj.get1 = function (q, object) {
          return $http.get(serviceBase + q + '/' + object).then(function (results) {
            return results.data;

          });
        };

        obj.get1sp = function (q, object,p) {
          return $http.get(serviceBase + q + '/' + object + '/' + p).then(function (results) {
            return results.data;
          });
        };


        obj.get2 = function (q, object1, object2) {
          return $http.get(serviceBase + q + '/' + object1 + '/' + object2).then(function (results) {
            return results.data;
          });
        };

        obj.get3 = function (q, object1, object2, object3) {
          return $http.get(serviceBase + q + '/' + object1 + '/' + object2 + '/' + object3).then(function (results) {
            return results.data;
          });
        };

        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        return obj;
}]);

app.factory("DataSwag", ['$http', '$location', '$q',
function ($http, $location, $q) {

  var serviceBase = 'api/v1/';

  var obj = {};


  obj.get = function (q) {
    var deferred = $q.defer();
    return $http.get(serviceBase + q).then(function (results) {
      deferred.resolve(results.data);
      return deferred.promise;
    });
  };

  obj.get1 = function (q, object) {
    var deferred = $q.defer();
    return $http.get(serviceBase + q + '/' + object).then(function (results) {
      deferred.resolve(results.data);
      return deferred.promise;
    });
  };

  obj.get2 = function (q, object1, object2) {
    var deferred = $q.defer();
    return $http.get(serviceBase + q + '/' + object1 + '/' + object2).then(function (results) {
      deferred.resolve(results.data);
      return deferred.promise;
    });
  };

  obj.get3 = function (q, object1, object2, object3) {
    var deferred = $q.defer();
    return $http.get(serviceBase + q + '/' + object1 + '/' + object2 + '/' + object3).then(function (results) {
      deferred.resolve(results.data);
      return deferred.promise;
    });
  };

  obj.post = function (q, object) {
    return $http.post(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.put = function (q, object) {
    return $http.put(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.delete = function (q) {
    return $http.delete(serviceBase + q).then(function (results) {
      return results.data;
    });
  };
  return obj;
}]);

app.factory("authData", ['$http',
function ($http, toaster) { // This service connects to our REST API

  var serviceBase = 'api/v2/';

  var obj = {};
  obj.toast = function (data) {
    toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
  }
  obj.get = function (q) {
    return $http.get(serviceBase + q).then(function (results) {
      return results.data;
    });
  };
  obj.post = function (q, object) {
    return $http.post(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.put = function (q, object) {
    return $http.put(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.delete = function (q) {
    return $http.delete(serviceBase + q).then(function (results) {
      return results.data;
    });
  };

  return obj;
}]);
