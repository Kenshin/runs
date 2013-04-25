module.exports = {

	options: {
		port: 3000
	},

	publish: {
		options: {
			base: '<%= src %>',
			middleware: function( connect, options ) {
				var lrSnippet = require( 'grunt-contrib-livereload/lib/utils' ).livereloadSnippet;
				return [
					lrSnippet,
					connect.bodyParser(),
					connect.static( options.base )
				];
			}
		}
	}

};