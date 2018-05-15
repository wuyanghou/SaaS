

## OA SaaS  前端代码
* 基于react15.x, dva2.x, react-router4.0, antd2.x, axios进行开发

### `代码目录`

```
SaaS/
  README.md
  node_modules/
  config/
  scripts/
  themes/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    models/
    services/
    views/
    components/
    index.js
    router.js
    registerServiceWorker.js

```



In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`


### `npm run build`

### `npm run buildDll ,第一次打包前，提前编译打包第三方类库，如果第三方类库有变动，需删除/public文件夹里面的vendor，重新运行npm run buildDll`

### `tips`
* 项目中使用了公司内部基于antd封装的私有组件库，在运行项目前需要将 XComponents/react-components 拷贝到src/ 下面 改名common_components















