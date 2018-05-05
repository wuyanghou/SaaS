/**
 * Created by luoming on 2018/5/5
 */
//动态引入文件
const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const models = [];
for (let i = 0; i < keys.length; i += 1) {
    models.push(context(keys[i]));
}
export default models;
