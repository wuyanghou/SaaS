/**
 * Created by luoming on 2018/5/4
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const vendors = [
    'axios',
    'dva',
    'react',
    'react-dom'
];
module.exports = {
    // 读取library.entry 里配置的node_module
    entry: {
        vendor: vendors,
    },
    output: {
        path: path.join(__dirname, '../', 'public/vendor'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        //清除 vendor文件夹
        new CleanWebpackPlugin('vendor', {
            root: path.join(__dirname,'../public'),
        }),
        // 文件输出到 ./vendor 中
        new webpack.DllPlugin({
            path: path.join(__dirname, '../', 'public/vendor', '[name]-manifest.json'),
            name: '[name]_[hash]',
            context: path.join(__dirname, '../', 'public'),
        }),
        // 压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};