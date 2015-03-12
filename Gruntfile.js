  module.exports = function(grunt) {

  grunt.initConfig({

    // AMD definitions
    autowrap: {
      amd: {
        options: {
          wrapType:'amd'
        },
        files: {
          'dist/phone-format-amd.js': ['lib/phone-format-interface.js']
        }
      },
      exports: {
        options: {
          wrapType:'exports'
        },
        files: {
          'dist/phone-format-exports.js': ['lib/phone-format-interface.js']
        }
      }
    },

    // Concat definitions
    concat: {
      options: {
        separator: ';',
      },
      basic_js: {
        src: ['lib/phone-format-interface.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format.js'
      },
      amd: {
        src: ['dist/phone-format-amd.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-amd.js'
      },
      exports: {
        src: ['dist/phone-format-exports.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-exports.js'
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ['dist/phone-format.js'],
        dest: 'dist/phone-format.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-autowrap');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['autowrap', 'concat', 'uglify']);
};
