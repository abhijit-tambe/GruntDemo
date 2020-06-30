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
    },
  });

  // Load the Pluggins
  //grunt.loadNpmTasks()
  grunt.loadNpmTasks("grunt-contrib-concat");
  //register tasks
  grunt.registerTask("run", function () {
    console.log("task is running");
  });
};
