module.exports = {
  name: 'gruntPKG',
  version: '0.0.1',
  description: 'nothing',
  main: 'index.html',
  scripts: {
    test: 'echo "Error: no test specified" && exit 1'
  },
  repository: {
    type: 'git',
    url: 'https://github.com/xlldll'
  },
  keywords: ['gruntPKG'],
  author: 'linchuqiang',
  license: 'ISC',
  bugs: {
    url: 'https://github.com/xlldll'
  },
  homepage: 'https://github.com/xlldll#',
  dependencies: {
    grunt: '*',
    'grunt-bower-task': '*',
    'load-grunt-tasks': '^3.5.0',
    'time-grunt': '^1.3.0',
    'grunt-contrib-sass': '^1.0.0',
    'grunt-contrib-coffee': '^1.0.0',
    'grunt-contrib-copy': '^1.0.0',
    'grunt-contrib-clean': '^1.0.0',
    'grunt-contrib-concat': '^1.0.1',
    'grunt-sync': '^0.5.2',
    'grunt-contrib-connect': '^1.0.0',
    'grunt-contrib-watch': '^1.0.0',
    'grunt-newer': '^1.2.0',
    'grunt-contrib-jshint': '^1.0.0',
    'grunt-contrib-csslint': '^1.0.0',
    'grunt-contrib-htmlmin': '*',
    'grunt-contrib-requirejs': '^1.0.0',
    'grunt-contrib-cssmin': '*',
    'grunt-contrib-imagemin': '*',
    'grunt-contrib-uglify': '*',
    'grunt-browserify': '^5.0.0',
    'load-grunt-configs': '^1.0.0'
  },
  devDependencies: {
    'autobind-decorator': '1.3.2',
    'babel-plugin-transform-decorators-legacy': '^1.3.4',
    'babel-preset-es2015': '^6.22.0',
    'babel-preset-react': '^6.23.0',
    'babel-preset-stage-2': '^6.22.0',
    babelify: '^7.3.0',
    react: '^0.14.0',
    'react-addons-css-transition-group': '0.14.0',
    'react-catalyst': '^0.3.0',
    'react-dom': '^0.14.0',
    'react-mixin': '3.0.0',
    'react-router': '1.0.0-rc3'
  }
};