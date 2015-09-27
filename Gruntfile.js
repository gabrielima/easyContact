module.exports = function(grunt) {

    grunt.initConfig({
      
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              'public/css/main.min.css': 'public/css/sass/main.scss'
            }
          }
        },

        watch: {
          css: {
            files: ['public/css/**/*.scss'],
            tasks: ['sass', 'concat']
          },
          js: {
            files: ['public/js/**/*.js', 'public/js/**/*.js'],
            tasks: ['uglify']
          }
        },

        uglify: {
            js: { 
                src: ['./public/js/script.min.js'],
                dest: './public/js/script.min.js'
            },

            bower : { 
                src: ['./public/vendors/bower_components/angular/angular.min.js',
                      './public/vendors/bower_components/angular-resource/angular-resource.min.js',
                      './public/vendors/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                      './public/vendors/bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js',
                      './public/vendors/bower_components/ladda/dist/spin.min.js',
                      './public/vendors/bower_components/ladda/dist/ladda.min.js',
                      './public/vendors/bower_components/angular-ladda/dist/angular-ladda.min.js'],
                dest: './public/js/vendors.min.js'
            },        
        },

        concat: { 
            dist: {
                src: ['./public/css/main.min.css', 
                      './public/vendors/bower_components/ladda/dist/ladda-themeless.min.css' ],
                dest: './public/css/main.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['uglify:js', 'sass', 'concat', 'watch']);
    grunt.registerTask('bower', ['uglify:bower']);
};