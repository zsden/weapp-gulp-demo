import gulp from 'gulp'
import rename from 'gulp-rename'
import runSequence from 'gulp4-run-sequence'
import imagemin from 'gulp-imagemin'

import imageminGifsicle from 'imagemin-gifsicle'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminOptipng from 'imagemin-optipng'
import imageminSvgo from 'imagemin-svgo'

import cache from 'gulp-cache'
import sass from 'sass'
import gulpSass from 'gulp-sass'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'

const pipeSass = gulpSass(sass)

/**
 * 小程序文件根目录
 */
const src = './src'

/**
 * 将scss转换为wxss
 */
gulp.task('scss', function () {
  return gulp
    .src(`${src}/**/*.scss`)
    .pipe(pipeSass())
    .pipe(postcss())
    .pipe(sourcemaps.write('.'))
    .pipe(
      rename((path) => {
        path.extname = '.wxss'
      })
    )
    .pipe(
      gulp.dest((file) => {
        return file.base
      })
    )
})

/**
 * 压缩图片
 */
gulp.task('img', function () {
  return gulp
    .src(`${src}/**/*.{png,jpe?g,gif,svg}`)
    .pipe(
      cache(
        imagemin([
          imageminGifsicle({ interlaced: true }),
          imageminMozjpeg({ progressive: true }),
          imageminOptipng({ optimizationLevel: 4 }),
          imageminSvgo({
            plugins: [{ removeDimensions: true }]
          })
        ])
      )
    )
    .pipe(
      gulp.dest((file) => {
        return file.base
      })
    )
})

gulp.task('watch', function () {
  gulp.watch([`${src}/**/*.scss`], gulp.series('scss'))
})

gulp.task('dev', function () {
  runSequence(['scss', 'img'], ['watch'])
})

gulp.task('build', gulp.series(('scss', 'img')))
