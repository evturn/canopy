module.exports = {
  less: {
    src: 'assets/less/*.less',
    watch: 'assets/less/**/*.less',
    dest: 'dist/css',
    filename: 'less.css'
  },
  css: {
    src: [
      'assets/css/animate.css',
      'assets/css/reset.css'
    ],
    dest: 'dist/css',
    filename: 'style.css'
  },
  js: {
    src: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js'
    ],
    watch: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
    vendor: {
      src: [
        'assets/js/vendor/jquery.min.js'
      ],
      dest: 'dist/js',
      filename: 'vendor.js'
    }
  },
  jshint: {
    src: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js',
      'config/**/*.js',
      'routes/**/*.js',
      'gulpfile.js',
      'server.js'
    ],
    watch: [
      'assets/js/**/*.js',
      '!assets/js/vendor/**/*.js',
      'config/**/*.js',
      'routes/**/*.js',
      'gulpfile.js',
      'server.js'
    ]
  }
};