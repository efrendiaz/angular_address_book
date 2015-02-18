angular.module('addressBookApp.controllers', []).controller('ContactListController', function($scope, $state, $window, Contact) {
  $scope.contacts = Contact.query(); //fetch all contacts. Issues a GET to /api/contact

  }).controller('ContactViewController', function($scope, $stateParams, Contact) {
  $scope.contact = Contact.get({ id: $stateParams.id }); //Get a single contact.Issues a GET to /api/contacts/:id
});
