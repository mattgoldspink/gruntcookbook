module.exports = function (grunt) {

    grunt.initConfig({
      clean: ["css", "font", "images", "js", "mailchimp"],
      copy: {
        deploy: {
          files: [
            {
              expand: true,
              cwd: "themeforest-4975109-sellbook-responsive-ebook-template/html/boxed",
              src: ["**", "!subscribe-process.php", "!mailchimp"],
              dest: "."
            }
          ]
        }
      }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["clean", "copy"]);
};