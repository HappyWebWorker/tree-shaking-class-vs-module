const path = require('path');

module.exports = {
	mode: 'production',
  entry: {
		'classDesign': path.resolve(__dirname, '/src/classDesign/index.js'),
		'moduleDesign': path.resolve(__dirname, '/src/moduleDesign/index.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};