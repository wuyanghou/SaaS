/**
 * Created by luoming on 2018/5/5
 */
import styles from './index.less';
import {Route, Switch,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic';

const DomainLogin = dynamic({
    component: () => import('./Right/domainLogin')
})
const AccountLogin = dynamic({
    component: () => import('./Right/accountLogin')
})
const ForgetDomain = dynamic({
    component: () => import('./Right/forgetDomain')
})
const ForgetAccount = dynamic({
    component: () => import('./Right/forgetAccount')
})
const ResetPassword = dynamic({
    component: () => import('./Right/resetPassword')
})
export default class Home extends React.Component {
    state = {};

    render() {
        return (
            <div className={styles.login}>
                <div>
                    <div className={styles.left}>
                        <div className={styles.logo}>
                        </div>
                        <div className={styles.info}>
                            Welcome to use Essentialthe cooperative system, you can realize team cooperation, schedule
                            management and fast office work here.
                        </div>
                    </div>
                    <Switch>s
                        <Route path={`/login/domainLogin`} component={DomainLogin}/>
                        <Route path={`/login/accountLogin`} component={AccountLogin}/>
                        <Route path={`/login/forgetDomain`} component={ForgetDomain}/>
                        <Route path={`/login/forgetAccount`} component={ForgetAccount}/>
                        <Route path={`/login/resetPassword`} component={ResetPassword}/>
                        <Redirect to="/login/domainLogin" />
                    </Switch>
                </div>
            </div>
        )
    }
}