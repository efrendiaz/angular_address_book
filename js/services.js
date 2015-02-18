angular.module('addressBookApp.services', ['ngResource']).factory('Contact', function($resource) {
  return $resource('http://localhost:3000/contacts.json/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});