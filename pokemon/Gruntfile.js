module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            build: {
                files: [{
                    // 'dist/js/logic.min.js': 'src/logic.js',
                    // 'dist/js/utils.min.js': 'src/utils.js',
                    // 'dist/js/compiled.min.js': 'src/*.js',
                    cwd:'./src',
                    src:'**/*.js',
                    dest:'./dist/js/*.js'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
}