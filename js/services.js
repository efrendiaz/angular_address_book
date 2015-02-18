angular.module('addressBookApp.services', ['ngResource']).factory('Contacts', function($resource) {
  return $resource('http://localhost:3000/contacts/:id.json', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
});