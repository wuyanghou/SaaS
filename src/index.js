import 'COMMON_COMPONENT/theme/less/index.less'; // 公用组件样式
// import 'COMMON_COMPONENT/assets/iconfont/index.less'; // iconfont
// import 'COMMON_COMPONENT/assets/css/keyframes.css'; // 公用动画库样式
// import 'ASSET/less/index.less'; // 项目全局样式
import dva from 'dva';
// import 'moment/locale/zh-cn'
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import ShowMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import router from './router';
import models from './models';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(e) {
        ShowMessage(e.message, 'error');
    }
});

// 2. Plugins
app.use(createLoading());

// 3. Register all model
models.forEach((m) => {
    app.model(m.default);
});

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

export default app;
