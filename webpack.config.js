module.exports={
	entry: './src/js/app.js',

	output:{
		path:__dirname,
		filename:'dist/bundle.js'
	},

	module: {
    loaders : [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude:/node_modules/,
        query: {
          presets:['es2015','react']
        }
      },

      {

      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }

    }



    ]
  }
}