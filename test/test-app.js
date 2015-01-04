'use strict';

var path = require('path');
var os = require('os');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('ng-multipage:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        projectName: 'Project Test',
        modulePrefix: 'pt'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      'client/pages/index.html',
      'client/pages/main.js',
      '.yo-rc.json',
      'gulpfile.js'
    ]);
  });
});
