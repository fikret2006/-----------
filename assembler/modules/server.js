const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
{ path } = require('./vars').vars;

const connect = () => {
	browserSync.init({
		server: {
			baseDir: path.serverRoot,
			open: true,
			routes: {
				'../../node_modules':'node_modules'
			}
		},
		tunnel: false
	});

	browserSync.watch(path.serverRoot).on('change', () => setTimeout(browserSync.reload, 500));
}

module.exports = connect;