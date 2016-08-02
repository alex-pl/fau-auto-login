const gulp = require('gulp');
const zip = require('gulp-zip');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

gulp.task('default', ['firefox', 'chrome']);

// firefox
gulp.task('firefox', function () {
    return gulp.src(['manifest.firefox.json', 'icon*.png', 'data/*'], {base: './'})
        .pipe(rename(path => {
            if (path.basename == 'manifest.firefox') {
                path.basename = 'manifest';
            }
        }))
        .pipe(zip('fau-auto-login.firefox.xpi'))
        .pipe(gulp.dest('dist'));
});

// chrome and opera
gulp.task('chrome', function () {
    return gulp.src(['manifest.chrome.json', 'icon*.png', 'data/*'], {base: './'})
        .pipe(rename(path => {
            if (path.basename == 'manifest.chrome') {
                path.basename = 'manifest';
            }
        }))
        .pipe(zip('fau-auto-login.chrome.zip'))
        .pipe(gulp.dest('dist'));
});

// edge
// gulp.task('edge', function () {
//     return gulp.src(['manifest.firefox.json', 'icon*.png', 'data/*'], {base: './'})
//         .pipe(rename(path => {
//             if (path.basename == 'manifest.firefox') {
//                 path.basename = 'manifest';
//             }
//         }))
//         .pipe(zip('fau-auto-login.edge.zip'))
//         .pipe(gulp.dest('dist'));
// });

// remove
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});
