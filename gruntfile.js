// load pluggin
//register tasks.
/*to do
jshint
watch*/
var sass = require("node-sass");
module.exports = function (grunt) {
  //configuration
  grunt.initConfig({
    concat: {
      js: {
        // src:['js/jQuery.js','js/script.js','js/rslides/js']
        src: ["js/*.js"],
        dest: "build/scripts.js",
      },
      css: {
        src: ["css/*.css"],
        dest: "build/style.css",
      },
    },
    sass: {
      options: {
        implementation: sass,
        // sourceMap: true,
      },
      build: {
        files: [
          {
            src: "css/sass/style.scss",
            dest: "css/styles.css",
          },
        ],
      },
    },
    uglify: {
      build: {
        files: [
          {
            src: "build/scripts.js",

            dest: "build/scripts.js",
          },
        ],
      },
    },
    imagemin: {
      build: {
        files: [
          {
            src: "images/bg.jpg",
            dest: "build/bg.jpg",
          },
        ],
      },
    },
  });

  // Load the Pluggins
  //grunt.loadNpmTasks()
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
  // grunt.registerTask("sass", ["sass"]);
};
