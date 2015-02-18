angular.module('addressBookApp', ['ui.router', 'ngResource', 'addressBookApp.controllers', 'addressBookApp.services']);

angular.module('addressBookApp').config(function($stateProvider) {
  $stateProvider.state('contacts', { // state for showing all contacts
    url: '/contacts',
    templateUrl: 'partials/contacts.html',
    controller: 'ContactListController'
  });
}).run(function($state) {
  $state.go('contacts'); //make a transition to movies state when app starts
});