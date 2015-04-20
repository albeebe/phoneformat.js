  module.exports = function(grunt) {

  grunt.initConfig({

    // AMD definitions
    autowrap: {
      amd: {
        options: {
          wrapType:'amd'
        },
        files: {
          'dist/phone-format-amd.js': ['dist/phone-format-amd.js']
        }
      },
      exports: {
        options: {
          wrapType:'exports'
        },
        files: {
          'dist/phone-format-exports.js': ['dist/phone-format-exports.js']
        }
      }
    },


    // Use replace workaroung to avoid the following error when running autowrap task
    // Warning: Parse error on line 48:
    // ...g.SINGLE_QUOTE_RE_=/'/g;goog.string.NULL...
    // -----------------------^
    // Expecting 'REGEXP_BODY', got 'STRING' Use --force to continue.
    replace: {
      addWorkaround: {
        src: ['dist/phone-format-amd.js', 'dist/phone-format-exports.js'],
        overwrite: true,
        replacements: [{
          from: "/'/g",
          to: "/(')/g"
        }]
      },
      removeWorkaround: {
        src: ['dist/phone-format-amd.js', 'dist/phone-format-exports.js'],
        overwrite: true,
        replacements: [{
          from: "/(')/g",
          to: "/'/g"
        }]
      }
    },

    // Concat definitions
    concat: {
      amd: {
        src: ['lib/google-libraries.js', 'lib/phone-format-interface.js'],
        dest: 'dist/phone-format-amd.js'
      },
      exports: {
        src: ['lib/google-libraries.js', 'lib/phone-format-interface.js'],
        dest: 'dist/phone-format-exports.js'
      },
      global: {
        src: ['lib/global-wrap-start.js', 'dist/phone-format.js', 'lib/global-wrap-end.js'],
        dest: 'dist/phone-format-global.js'
      },
      original: {
        src: ['lib/google-libraries.js', 'lib/phone-format-interface.js'],
        dest: 'dist/phone-format.js'
      }
    },

    // Minify definitions
    uglify: {
      options: {
        mangle: false,
        sourceMap: true
      },
      amd: {
        src: ['dist/phone-format-amd.js'],
        dest: 'dist/phone-format-amd.min.js'
      },
      exports: {
        src: ['dist/phone-format-exports.js'],
        dest: 'dist/phone-format-exports.min.js'
      },
      global: {
        src: ['dist/phone-format-global.js'],
        dest: 'dist/phone-format-global.min.js'
      },
      original: {
        src: ['dist/phone-format.js'],
        dest: 'dist/phone-format.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-autowrap');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', [
    'concat',
    'replace:addWorkaround', // Workaroung to avoid autowrap Parse error
    'autowrap',
    'replace:removeWorkaround', // Workaroung to avoid autowrap Parse error
    'uglify'
  ]);

};
