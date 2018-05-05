/**
 * Created by yujiayu on 2017/12/19.
 */
const paths = require('../config/paths');
// 原始的配置
const initialTheme = require(`${paths.initialTheme}/override_antd`)();
// 项目个性化配置
module.exports = Object.assign(
  {},
  initialTheme)
