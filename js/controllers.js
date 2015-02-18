angular.module('addressBookApp.controllers', []).controller('ContactListController', function($scope, $state, $window, Contacts) {
  $scope.contacts = Contacts.query(); //fetch all contacts. Issues a GET to /api/contact

  }).controller('ContactViewController', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get({ id: $stateParams.id }); //Get a single contact.Issues a GET to /api/contacts/:id

  }).controller('ContactEditController', function($scope, $state, $stateParams, Contacts) {
  $scope.updateContact = function() { //Update the edited contact. Issues a PUT to /api/contacts/:id
    $scope.contact.$update(function() {
      $state.go('contacts'); // on success go back to home i.e. contacts state.
    });
  };

  $scope.loadContact = function() { //Issues a GET request to /api/contacts/:id to get a contact to update
    $scope.contact = Contacts.get({ id: $stateParams.id });
  };

  $scope.loadContact(); // Load a movie which can be edited on UI
});
