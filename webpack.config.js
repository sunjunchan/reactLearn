const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = newPath => path.resolve(path.resolve(__dirname, '../'), newPath);

const packageName = require('../package.json').name;

var pubPlugins = [
  new VueLoaderPlugin(),
  // 把指定文件夹下的文件复制到指定的目录
  new CopyWebpackPlugin(
    [
      {
        from: resolve('third_party/UEditor-utf8-jsp'),
        to: resolve('dist/third_party/UEditor-utf8-jsp')
      },
      {
        from: resolve('third_party/kindeditor'),
        to: resolve('dist/third_party/kindeditor')
      },
      {
        from: resolve('third_party/kuick-deal-js-sdk'),
        to: resolve('dist/third_party/kuick-deal-js-sdk')
      }
    ]
  ),

  new webpack.HotModuleReplacementPlugin(),
  new StyleLintPlugin({
    files: ['**/*.{vue,htm,html,css,less,scss,sass}']
  })
];

let config = {
  // 设定入口文件（entry）配置 webpack 来指明它的位置
  entry: {
    'kda-applet': resolve('./apps/applet/appletEntry'),
    'kda-web-vue': resolve('./apps/web-vue/entry')
  },

  output: {
    path: resolve('dist'), // 输出文件的保存路径
    chunkFilename: 'chunks/[name].[chunkhash].min.js',

    // library: ['KDA2'],
    // libraryTarget: 'umd'
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader"},
      // 配置 eslint
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|third_party)/
      },

      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      // css|sass
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: ['./lib/assets/style/kDA_bassScss.scss']
            }
          }
        ]
      },

      // less
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },

      // img
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 10240 // 小于10kb才会转成base
        }
      },

      // html
      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      // bootstrap fonts
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      // shim
      {
        test: /kuick-push-js-client\.js/,
        loader: 'imports-loader?io=socket-io'
      },
      // shim
      {
        test: /deallive-pc.min\.js/,
        loader: 'imports-loader?io=socket-io'
      }
    ]
  },

  resolve: {
    modules: [
      resolve('./node_modules'),
      resolve('./third_party'),
      resolve('./lib'),
      resolve('./apps/applet'),
      resolve('./apps/crm'),
      resolve('./apps/web')
    ],
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue',
      'socket-io': resolve('./third_party/socket.io.js'),
      config: resolve('./lib/config.js'),
      '@': resolve('./')
    }
  },

  // 插件
  plugins: pubPlugins,

  stats: {
    chunks: false,
    assets: false
  }
};

module.exports = config;
