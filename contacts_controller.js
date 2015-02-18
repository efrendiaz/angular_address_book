function contactsController($scope,$http) {
    $http.get("http://localhost:3000/contacts.json")
    .success(function(response) {$scope.contacts = response;});

}
