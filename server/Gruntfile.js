'use strict';

module.exports = function(grunt) {
  // require('load-grunt-tasks')(grunt);
  // require('time-grunt')(grunt);

  grunt.initConfig({
  	mochaTest: {
  		all: {
  			options: {
  				reporter: 'spec'
  			},
  			src: ['test/**/*.js']
  		},
  	}
  });
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('test', ['mochaTest:all']);

};