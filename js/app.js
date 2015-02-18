angular.module('addressBookApp', ['ui.router', 'ngResource', 'addressBookApp.controllers', 'addressBookApp.services']);

angular.module('addressBookApp').config(function($stateProvider) {
  $stateProvider.state('contacts', { // state for showing all contacts
    url: '/contacts',
    templateUrl: 'partials/contacts.html',
    controller: 'ContactListController'
  }).state('viewContact', { //state for showing single contact
    url: '/contacts/:id/view',
    templateUrl: 'partials/contact-view.html',
    controller: 'ContactViewController'
  });
}).run(function($state) {
  $state.go('contacts'); //make a transition to movies state when app starts
});