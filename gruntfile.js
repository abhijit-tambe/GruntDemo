// load pluggin
//register tasks
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
  });

  // Load the Pluggins
  //grunt.loadNpmTasks()
  grunt.loadNpmTasks("grunt-contrib-concat");
  //register tasks
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
};
