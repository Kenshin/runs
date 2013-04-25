module.exports = function( grunt ) {

	var config = {

		//src
		src        : 'src',

		//files
		files   : [
			'<%= src %>/*.html'
		],

		//task
		watch      : require( './config/regarde.js' ),
		connect    : require( './config/connect.js' ),
		open       : require( './config/open.js'    )

	};

	/* init config */
	grunt.initConfig( config );

	/*  load npm tasks
		use matchdep each grunt-* with grunt.loadNpmTasks method */
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	/* rename regarde to watch */
	grunt.renameTask( 'regarde', 'watch' );

	/* task of use as watch project */
	grunt.registerTask( 'default', [ 'livereload-start', 'open', 'connect', 'watch' ]);

};