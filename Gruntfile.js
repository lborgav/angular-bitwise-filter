module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    meta: {
      banner: '/**\n' + ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * @author <%= pkg.author.name %>\n' +
        ' * @license <%= pkg.license %>\n**/\n\n'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>\'use strict\';\n',
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      prod: {
        singleRun: true,
        autoWatch: false
      }
    },
    uglify: {
      build: {
        src: ['<%= concat.dist.dest %>'],
        dest: '<%= pkg.main %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('test', ['karma:prod']);

  grunt.registerTask('default', ['build', 'test']);

};
