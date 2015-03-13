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
      basic_js: {
        src: ['lib/phone-format-interface.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format.js'
      },
      global_js: {
        src: ['lib/google-libraries.js', 'lib/global-wrap-start.js', 'lib/phone-format-interface.js', 'lib/global-wrap-end.js'],
        dest: 'dist/phone-format-global.js'
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
      basic_js: {
        src: ['dist/phone-format.js'],
        dest: 'dist/phone-format.min.js'
      },
      global_js: {
        src: ['dist/phone-format-global.js'],
        dest: 'dist/phone-format-global.min.js'
      },
      amd: {
        src: ['dist/phone-format-amd.js'],
        dest: 'dist/phone-format-amd.min.js'
      },
      exports: {
        src: ['dist/phone-format-exports.js'],
        dest: 'dist/phone-format-exports.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-autowrap');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['autowrap', 'concat', 'uglify']);
};
