var pkg = require('./package.json'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  del = require('del'),
  through = require('through'),
  opn = require('opn'),
  ghpages = require('gh-pages'),
  path = require('path'),
  browserify = require('browserify'),
  isDist = process.argv.indexOf('serve') === -1;


gulp.task('js', function() {
  return browserify('src/scripts/main.js', { debug: !isDist })
    .bundle()
    .pipe(isDist ? through() : plumber())
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(isDist ? uglify() : through())
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('md', function() {
  return gulp.src(['src/**/*.md', 'README.md'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src('src/styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules
      'include css': true,
      'paths': ['./node_modules']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
});

gulp.task('attachments', function() {
  return gulp.src(['src/attachments/**/*'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/attachments'))
    .pipe(connect.reload());
});

gulp.task('favicon', function() {
  return gulp.src(['favicon.ico'])
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: ['dist'],
    livereload: true,
    port: 8081
  });

  opn('http://localhost:8081', done);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.md', ['md']);
  gulp.watch('README.md', ['md']);
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/scripts/**/*.js', ['js']);
});

gulp.task('deploy', function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});

gulp.task('build', ['js', 'html', 'md', 'css', 'images', 'attachments', 'favicon' ]);
gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['serve']);
