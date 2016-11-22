module.exports = {
    // Where to start processing our code
    // Input
    entry  : './app/app.jsx',
    // Specify where to dump the bundled file
    // Output
    output : {
        // Path to the folder
        // NodeJS exclusive __dirname: path to the current folder
        path    : __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root      : __dirname,
        // Pick names for our components
        // Tell webpack where to find that component
        alias     : {
            Main          : 'app/components/Main.jsx',
            Nav           : 'app/components/Nav.jsx',
            Weather       : 'app/components/Weather.jsx',
            WeatherForm   : 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            About         : 'app/components/About.jsx',
            Examples      : 'app/components/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        // List of file extensions that we want to process
        extensions: ['', '.js', '.jsx'],
    },
    // Add the loader into the modules
    module : {
        loaders: [
            // Convert jsx files into es5 code that we can use today
            {
                // The module
                loader : 'babel-loader',
                // Take the files and parse them through react, get the output then run them through es2015
                query  : {
                    // stage-0 enables es6 features
                    presets: ['react', 'es2015', 'stage-0']
                },
                // Tell which files to parse
                test   : /\.jsx?$/,
                // Tell which folders we don't want to have parsed
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // Create source map which are very important debugging tools
    // cheap-module-eval-source-map not working
    // devtool: 'cheap-module-eval-source-map'
    devtool: 'inline-source-map'
    // or
    // devtool: 'eval-source-map'

};
