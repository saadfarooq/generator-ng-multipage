'use strict';
var yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  yosay = require('yosay'),
  config = require('../app/templates/gulp/config'),
  type = 'component';

var ModuleGenerator = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red(type) + ' subgenerator!'
    ));

    var prompts = [{
      name: 'componentName',
      message: 'Name for the ' + type + '?'
    }];

    this.prompt(prompts, function(props) {
      var compName = this._.camelize(props.componentName);
      this.composeWith('nobular:_module', {
        args: [
          props.componentName,
          type,
          // pick the folder from config
          config.src[type + 's']
        ]
      });
      this.composeWith('nobular:_style', {
        args: [
          props.componentName,
          type,
          // pick the folder from config
          config.src.sass
        ]
      });

      done();
    }.bind(this));
  },
});

module.exports = ModuleGenerator;
