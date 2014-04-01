'use strict';

module.exports = function(grunt) {
  // require('load-grunt-tasks')(grunt);
  // require('time-grunt')(grunt);

  grunt.initConfig({
  	jasmine: {
  		pivotal: {
        src: 'client/assets/js/*.js',
  			options: {
          vendor: [
          'client/bower_components/angular/angular.js',
          'client/bower_components/angular-mocks/angular-mocks.js',
          'client/bower_components/lodash/dist/lodash.js',
          'client/bower_components/restangular/dist/restangular.js',
          ],
          specs: 'client/tests/*.js'
  			}
  		},
  	},
    mochaTest: {
      all: {
        options: {
          reporter: 'spec'
        },
        require: [
        'client/bower_components/angular/angular.min.js'
        ],
        src: ['client/tests/**/*.js']
      },
    }
  });
  // grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('test', ['jasmine']);

};