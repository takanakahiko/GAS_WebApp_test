import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import source from 'vinyl-source-stream'
import transform from 'vinyl-transform'
import runSequence from 'run-sequence'
import path from 'path'
import plumber from 'gulp-plumber';
import inline from 'gulp-inline'
import browserify from 'browserify'
import babelify from 'babelify'
import uglify from 'gulp-uglify'

const $ = gulpLoadPlugins();

const path_ui = 'dev/ui/'
const path_server = 'dev/server/'
const path_test = 'test/'
const path_dist = 'src/'


gulp.task('gas-upload', ['build-server', 'build-ui'], () =>
  gulp.src('.')
    .pipe($.exec('gapps upload'))
)

gulp.task('test', () =>
  gulp.src([path.join(path_test,'*.js')], { read: false })
    .pipe($.mocha({ reporter: 'spec' }))
)

gulp.task('build-server', ['test'], () =>{
  gulp.src(path.join(path_server,'*.js'))
  .pipe(plumber())
  .pipe(transform(
    (f)=>
      browserify(f)
      .transform('babelify')
      .plugin('gasify')
      .bundle()
  ))
  .pipe(gulp.dest(path_dist))
})

gulp.task('build-ui', ['test'], () => {
  gulp.src(path.join(path_ui,'*.html'))
  .pipe(inline({
    base: path_ui,
    js: [
      plumber(),
      transform((f)=>browserify(f).transform('babelify').bundle()),
      uglify
    ]
  }))
  .pipe(gulp.dest(path_dist));
})

gulp.task('watch', () =>
  gulp.watch(
    [
      path.join(path_server,'**/*'),
      path.join(path_ui,'**/*'),
      path.join(path_test,'**/*')
    ],
    ['test', 'build-server', 'build-ui', 'gas-upload']
  )
)

gulp.task('default', ['test', 'build-server', 'build-ui', 'gas-upload', 'watch']);