module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            build: {
                files: {
                    // 'dist/js/logic.min.js': 'src/logic.js',
                    // 'dist/js/utils.min.js': 'src/utils.js',
                    'dist/js/compiled.min.js': 'src/*.js',
                }
            }
        },
        sass: {
            options: {
                style: 'compressed'
            },
            build: {
                files: {
                    'dist/css/styles.min.js': 'src/sass/*.sass',
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['uglify', 'sass']);
}