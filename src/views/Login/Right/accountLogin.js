/**
 * Created by luoming on 2018/5/16
 */

import styles from './domain.less';
import Item from './item';
import Loading from 'COMMON_COMPONENT/Loading';
import showMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import LoginApi from 'SERVICE/login';

const {login, getCompanyInfo} = LoginApi;


export default class AccountLogin extends React.Component {
    state = {
        moveToTop: false,
        account: '',
        password: ''
    };
    accountBlur = () => {
        let {account} = this.state;
        if (!account) this.setState({accountToTop: false});
    }
    pwdBlur = () => {
        let {password} = this.state;
        if (!password) this.setState({pwdToTop: false});
    }
    login = async () => {
        let {history} = this.props;
        let {account, password, secondDomain} = this.state;
        this.setState({loading: true});
        let {data} = await login({account, password, secondDomain: 'xuebang'});
        if (data) {
            this.setState({loading: false});
            showMessage('登录成功！','success');
        }
        setTimeout(()=> history.push('/Dashboard'),1000);

    }
    forgetAccount = () => {
        let {history} = this.props;
        history.push('/login/forgetAccount');
    }

    componentWillMount() {
        // getCompanyInfo().then(res=>console.log(res))
    }

    render() {
        let {accountToTop, pwdToTop, account, password, company, showPassword, loading} = this.state;
        return (
            <div className={styles.account}>
                <div className={styles.company}>{company || '广州学邦信息技术有限公司'}</div>
                <div className={styles.tips}>Essential系统</div>
                <div className={styles.form}>

                    <div>
                        <Item
                            label={'账号'}
                            value={account}
                            moveToTop={accountToTop}
                            focus={e => this.setState({accountToTop: true})}
                            blur={this.accountBlur}
                            change={e => this.setState({account: e.target.value})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <Item
                            label={'密码'}
                            value={password}
                            moveToTop={pwdToTop}
                            type={'password'}
                            focus={e => this.setState({pwdToTop: true})}
                            blur={this.pwdBlur}
                            change={e => this.setState({password: e.target.value})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={(account && password) ? false : true}
                            className={(account && password) ? '' : 'disabled'}
                            onClick={this.login}>登录
                    </button>
                </div>
                <span onClick={this.forgetAccount}>忘记密码？</span>
                <Loading loading={loading}/>
            </div>
        )
    }
}