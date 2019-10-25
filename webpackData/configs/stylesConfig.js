import MiniCssExtractPlugin from "mini-css-extract-plugin";

function makeStylesConfig(options) {
	options = options ? options : {};

	return {
		module: {
			rules: [
				{
					test: /\.(css)/,
					use: [
						"style-loader",
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader", options: { url: false } }
					],
					exclude: /[\\/]node_modules[\\/]/
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "userChrome.css"
			})
		]
	};
};

export default makeStylesConfig;