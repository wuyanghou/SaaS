/**
 * Created by luoming on 2018/5/5
 */
'use strict';
const path = require('path');
const paths = require('./paths');

const src = paths.appSrc; // 开发源码目录
module.exports = {
    // 自定义路径别名
    SRC: src,
    ASSET: path.resolve(src, 'assets'),
    COMMON_COMPONENT: path.resolve(src, 'common-components'),
    SERVICE: path.resolve(src, 'services'),
    VIEW: path.resolve(src, 'views'),
    UTIL: path.resolve(src, 'util'),
    CONSTANT: path.resolve(src, 'constant'),
    MODELS: path.resolve(src, 'models'),
}
