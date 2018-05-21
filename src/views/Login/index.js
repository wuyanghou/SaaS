/**
 * Created by luoming on 2018/5/5
 */
import styles from './index.less';
import {Route, Switch} from 'dva/router';
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
                    <Switch>
                        <Route path={`${this.props.match.path}/domainLogin`} component={DomainLogin}/>
                        <Route path={`${this.props.match.path}/accountLogin`} component={AccountLogin}/>
                        <Route path={`${this.props.match.path}/forgetDomain`} component={ForgetDomain}/>
                        <Route path={`${this.props.match.path}/forgetAccount`} component={ForgetAccount}/>
                        <Route path={`${this.props.match.path}/resetPassword`} component={ResetPassword}/>
                    </Switch>
                </div>
            </div>
        )
    }
}