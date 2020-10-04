const { watch, src, dest, parallel } = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync')
const cssnano = require('cssnano')
const del = require('del')
const postcss = require('gulp-postcss')
const image = require('gulp-image')
const gulpSass = require('gulp-sass')
const fileinclude = require('gulp-file-include')

const bundlePath = './public'
// Watch HTML Files
function html() {
  return src('./pages/**.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(dest(bundlePath))
    .pipe(browserSync.stream())
}

// Compile and Minify Img
function images() {
  return src('./assets/images/*')
    .pipe(image())
    .pipe(dest(`${bundlePath}/images`))
}
// Compile Svg Icons
function icons() {
  return src('./assets/icons/*.svg').pipe(dest(`${bundlePath}/icons`))
}

// Vendors Css Lib
function css() {
  return src('./assets/vendors/**.css')
    .pipe(dest(`${bundlePath}/styles`))
    .pipe(browserSync.stream())
}

// Compile SCSS/SASS to CSS
function scss() {
  return src('./scss/main.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(`${bundlePath}/styles`))
    .pipe(browserSync.stream())
}

// Clean Up (deleted `dist` folder)
function clean() {
  return del([bundlePath])
}

// Web Server / Live Reload
function server() {
  browserSync.init({
    server: {
      baseDir: bundlePath,
    },
    // serveStatic: ['./'],
  })
  watch('./pages/index.html', html)
  watch('./scss/**/*.scss', scss)
  watch('./assets/images/*.(jpe?g|png)', images)
  watch('./assets/icons/*.svg', icons)
  browserSync.create().reload()
}

exports.clean = clean
exports.build = parallel(html, scss, css, images, icons)
exports.start = parallel(html, scss, css, images, icons, server)
