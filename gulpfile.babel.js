/* File: gulpfile.js */

// Use localhost:8080

'use strict';

import gulp          from 'gulp';
import babel         from 'gulp-babel';
import del           from 'del';
import browserSync   from 'browser-sync';
import pug           from 'gulp-pug';
import imagemin      from 'gulp-imagemin';
import webpack       from 'webpack-stream';
import sass          from 'gulp-sass';
import autoprefixer  from 'gulp-autoprefixer';
import cleanCSS      from 'gulp-clean-css';
import rename        from 'gulp-rename';
import formatHtml    from 'gulp-format-html';
import newer         from 'gulp-newer';

const port = '8080',
    server = browserSync.create();
const paths =  {
    build : 'build/',
    scripts : {
        src : 'src/assets/**/*.+(js|vue)',
        dest :'build/assets/',
    },
    styles : {
        src : 'src/assets/styles/**/*.+(scss|css)',
        frontSrc : 'src/assets/frontend/style/**/*.scss',
        dest : 'build/assets/styles/'
    },
    templates: {
        src: 'src/templates/**/*.+(pug|html)',
        exSrc: '!src/templates/include/**/*.+(pug|html)',
        dest: 'build/'
    },
    images: {
        src: 'src/assets/images/**/*.+(jpg|jpeg|png|gif|svg)',
        exSrc: '!src/assets/images/favicon/**/*',
        dest: 'build/assets/images/'
    },
    favicons: {
        src: 'src/assets/images/favicon/**/*.+(ico|png)',
        dest: 'build/'
    },
    fonts: {
        src: 'src/assets/fonts/**/*.+(eot|ttf|woff)',
        dest: 'build/assets/fonts/'
    },
};

export const clean = () => del([paths.build]);

export function reload(done) {
  server.reload();
  done();
}

export function browser(done) {
    return server.init({
        server: {
            baseDir: paths.build
        },
        port: port
    });
    done();
}

export const webpackStream = () => gulp.src( paths.scripts.src )
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest( paths.scripts.dest ))

export const webpackProd = () => gulp.src( paths.scripts.src )
.pipe(webpack( require('./webpack.prod.js') ))
.pipe(gulp.dest( paths.scripts.dest ))


export const templates = () => gulp.src([paths.templates.src, paths.templates.exSrc])
    .pipe(pug({
        pretty: true,
        defaults: {
            cache: false
        },
        verbose: true
    }))
    .pipe(formatHtml({
        indent_size: 4
    }))
    .pipe(gulp.dest( paths.templates.dest ))

export const styles = () => gulp.src(paths.styles.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
        grid: true,
        cascade: false
    }))
    .pipe(gulp.dest( paths.styles.dest ))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest( paths.styles.dest ))

export const webpackStyle = () => gulp.src([ paths.styles.frontSrc ])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
        grid: true,
        cascade: false
    }))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))

export const images = () => gulp.src([ paths.images.src, paths.images.exSrc ])
    .pipe(newer( paths.images.dest ))
    .pipe(imagemin([
        imagemin.mozjpeg({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 5
        })
    ], {
        verbose: true
    }))
    .pipe(gulp.dest( paths.images.dest ))

export const favicons = () => gulp.src( paths.favicons.src )
    .pipe(gulp.dest( paths.favicons.dest ))

export const fonts = () => gulp.src( paths.fonts.src )
     .pipe(gulp.dest( paths.fonts.dest ))

export const devwatch = () => {
    gulp.watch( paths.styles.src, gulp.series(styles, reload) );
    gulp.watch( paths.styles.frontSrc, gulp.series(webpackStyle, reload) );
    gulp.watch( paths.templates.src, gulp.series(templates, reload) );
    gulp.watch( paths.images.src, gulp.series(images, reload) );
    gulp.watch( paths.scripts.src, gulp.series(webpackStream, reload) );
    gulp.watch( paths.favicons.src, gulp.series(favicons, reload) );
    gulp.watch( paths.fonts.src, gulp.series(fonts, reload) );
}


exports.clean           = clean;
exports.webpackStream   = webpackStream;
exports.webpackProd     = webpackProd;
exports.templates       = templates;
exports.browser         = browser;
exports.favicons        = favicons;
exports.fonts           = fonts;
exports.images          = images;
exports.styles          = styles;
exports.devwatch        = devwatch;

const build = gulp.series(clean, templates, styles, favicons, fonts, images, webpackStream, gulp.parallel( devwatch, browser ));

export default build;

export const prod = gulp.series(clean, templates, styles, favicons, fonts, webpackProd);
