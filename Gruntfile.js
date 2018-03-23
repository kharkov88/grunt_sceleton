module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

      watch: {
        scripts: {
          files: 'src/*.js',
          tasks: ['jshint', 'concat'],
          options: {
            reload: true,
          },
        },
      },
      jshint: {
          all: ['Gruntfile.js', 'src/*.js']
        },
      concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['src/*.js'],
            dest: 'dist/built.js',
          },
      }
    }
  );

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'watch']);

};