angular.module('addressBookApp.controllers', []).controller('ContactListController', function($scope, $state, popupService, $window, Contacts) {
  $scope.contacts = Contacts.query(); //fetch all contacts. Issues a GET to /api/contact

  $scope.deleteContact = function(contact) { // Delete a contact. Issues a DELETE to /api/contacts/:id
    if (popupService.showPopup('Really delete this?')) {
      contact.$delete(function() {
        $window.location.href = '';//redirect to home
      });
    }
  };

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

 }).controller('ContactCreateController', function($scope, $state, $stateParams, Contacts) {
  $scope.contact = new Contacts();  //create new contact instance. Properties will be set via ng-model on UI

  $scope.addContact = function() { //create a new contact. Issues a POST to /api/contacts
    $scope.contact.$save(function() {
      $state.go('contacts'); // on success go back to home i.e. contacts state.
    });
  };
});
