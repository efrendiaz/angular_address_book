angular.module('addressBookApp.controllers', []).controller('ContactListController', function($scope, $state, $window, Contact) {
  $scope.contacts = Contact.query(); //fetch all contacts. Issues a GET to /api/contact
});
