'use strict';

module.exports = function(grunt) {
  // require('load-grunt-tasks')(grunt);
  // require('time-grunt')(grunt);

  grunt.initConfig({
  	jasmine: {
  		pivotal: {
  			options: {
  				specs: '**/test/**/*.js',
          vendor: 'bower_components/*'
  			},
        src: ['client/**/*.js',
            'server/**/*.js']
  		},
  	}
  });
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('test', ['mochaTest:all']);

};