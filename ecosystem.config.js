module.exports = {
	apps: [
		{
			name: 'data-sharing-service',
			script: 'dist/main.js',
			instances: 'max',
			exec_mode: 'cluster',
			watch: false,
			error_file: './error.log',
			out_file: './output.log'
		}
	]
};
