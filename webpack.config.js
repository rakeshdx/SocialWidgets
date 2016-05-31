var path = require('path');
var google = require('googleapis');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, exclude: /node_modules/, loader: 'babel'
        },
        {
			test: /\.css$/, loader: 'style!css?modules'
		}
        ]
    }
}
