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
      global: {
        src: ['lib/global-wrap-start.js', 'lib/phone-format-interface.js', 'lib/global-wrap-end.js'],
        dest: 'dist/phone-format-global.js'
      },
      addGoogleLibAmd: {
        src: ['dist/phone-format-amd.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-amd.js'
      },
      addGoogleLibExports: {
        src: ['dist/phone-format-exports.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-exports.js'
      },
      addGoogleLibGlobal: {
        src: ['dist/phone-format-global.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-global.js'
      },
      addGoogleLibOriginal: {
        src: ['dist/phone-format.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format.js'
      },
      addGoogleLibAmdMin: {
        src: ['dist/phone-format-amd.min.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-amd.min.js'
      },
      addGoogleLibExportsMin: {
        src: ['dist/phone-format-exports.min.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-exports.min.js'
      },
      addGoogleLibGlobalMin: {
        src: ['dist/phone-format-global.min.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format-global.min.js'
      },
      addGoogleLibOriginalMin: {
        src: ['dist/phone-format.min.js', 'lib/google-libraries.js'],
        dest: 'dist/phone-format.min.js'
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

  grunt.registerTask('default', [
    'autowrap',
    'concat:global',
    'uglify',
    'concat:addGoogleLibAmd',
    'concat:addGoogleLibExports',
    'concat:addGoogleLibGlobal',
    'concat:addGoogleLibOriginal',
    'concat:addGoogleLibAmdMin',
    'concat:addGoogleLibExportsMin',
    'concat:addGoogleLibGlobalMin',
    'concat:addGoogleLibOriginalMin'
  ]);
};
