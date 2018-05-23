/**
 * Created by luoming on 2018/5/16
 */

import styles from './domain.less';
import Item from './item';

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
    login = () => {

    }
    forgetAccount = () => {
        let {history} = this.props;
        history.push('/login/forgetAccount');
    }

    render() {
        console.log(this.props);
        let {accountToTop, pwdToTop, account, password, company, showPassword} = this.state;
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
                    <button disabled={account ? false : true} className={account ? '' : 'disabled'}
                            onClick={this.login}>登录
                    </button>
                </div>
                <span onClick={this.forgetAccount}>忘记密码？</span>
            </div>
        )
    }
}