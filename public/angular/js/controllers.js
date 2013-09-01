function IndexCtrl($scope, $http) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
}

function NewCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function() {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ShowCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

function EditCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function() {
    $http.put('/api/post' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/blog/show/' + $routeParams.id);
      });
  };
}

function DeleteCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function() {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/blog');
      });
  };

  $scope.home = function() {
    $location.url('/blog');
  };
}
