const path = require('path');

module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        // setting folder templates
        dirs: {
            js: 'js',
            css: 'css',
            sass: 'sass'
        },
        watch: {
            sass: {
                files: [
                    '<%= dirs.sass %>/*.scss',
                    '<%= dirs.sass %>/_partials/*.scss'
                ],
                tasks: ['sass:dev']
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap:'none'
                },
                files: {
                    '<%= dirs.css %>/style.css': ['<%= dirs.sass %>/style.scss']
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap:'none'
                },
                files: {
                    '<%= dirs.css %>/style.min.css': ['<%= dirs.sass %>/style.scss']
                }
            }
        },
        // Minify .js files.
        uglify: {
            jsfiles: {
                files: [{
                        expand: true,
                        cwd: '<%= dirs.js %>/',
                        src: [
                            '*.js',
                            '!*.min.js',
                            '!Gruntfile.js',
                            '!webcomponents.js',
                        ],
                        dest: '<%= dirs.js %>/',
                        ext: '.min.js'
                    }]
            }
        }

    });

    // Register tasks
    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('production', ['sass:dist', 'uglify']);
    
    

};