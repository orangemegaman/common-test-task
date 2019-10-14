const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const publicFolder = path.resolve(__dirname, 'public');
const srcFolder = path.resolve(__dirname, 'src');

const config = {
	mode: process.env.NODE_ENV,

	devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,

	entry: [
		path.resolve(srcFolder, 'index.js')
	],

	output: {
		publicPath: '/',
		path: publicFolder,
		filename: process.env.NODE_ENV !== 'production' ? '[hash].bundle.js' : '[hash].bundle.min.js'
	},

	resolve: {
		modules: [srcFolder, 'node_modules'],
		extensions: ['.js', '.scss', '.css']
	},

	devServer: {
		port: 3001,
		contentBase: publicFolder,
		historyApiFallback: true,
		hot: true
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [srcFolder],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										browsers: ['last 2 versions']
									},
									modules: false
								}
							],
							'@babel/react'
						],
						plugins: [
							'react-hot-loader/babel',
							'transform-object-rest-spread',
							'transform-class-properties'
						]
					}
				}
			},

			{
				test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader?name=fonts/[folder]/[name].[ext]'
			},

			{
				test: /\.(png|jpeg|jpg|svg|gif)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			},
			{
				test: /\.(scss|css|sass)$/,
				exclude: path.join(__dirname, '../node_modules'),
				// include: [path.resolve(srcFolder, 'components')],
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production'
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer'),
								require('cssnano')({
									preset: [
										'default', {
											discardComments: {
												removeAll: true
											}
										}
									]
								})
							],
							sourceMap: process.env.NODE_ENV !== 'production'
						}
					}
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(srcFolder, 'index.html')
		}),

		new MiniCssExtractPlugin({
			filename: process.env.NODE_ENV !== 'production' ? '[hash].styles.css' : '[hash].style.min.css',
			chunkFilename: '[id].css'
		}),

		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv()
	]
};

module.exports = config;
