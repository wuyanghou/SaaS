/**
 * Created by luoming on 2018/5/16
 */

import styles from './domain.less';
import Item from './item';
import Loading from 'COMMON_COMPONENT/Loading';
import showMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import LoginApi from 'SERVICE/login';

const {login, getCompanyInfo, getCompanyByDomain} = LoginApi;


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
        let {data, resultMessage} = await login({account, password, secondDomain: 'xuebang'});
        this.setState({loading: false});
        if (data) {
            showMessage('登录成功！', 'success');
            setTimeout(() => history.push('/Dashboard'), 1000);
        } else {
            showMessage(resultMessage)
        }

    }
    forgetAccount = () => {
        let {history} = this.props;
        history.push('/login/forgetAccount');
    }
    setAccount = (e) => {
        console.log(e.target.value);
        this.setState({account: e.target.value.replace(/\s/g, '')})
    }
    getCompanyByDomain = async (subDomain) => {
        this.setState({loading: true})
        let {name, secondDomain} = await getCompanyByDomain({secondDomain: subDomain});
        this.setState({name, secondDomain, loading: false});
    }

    componentWillMount() {
        const {hostname} = window.location;
        let subDomain;
        if (hostname === 'localhost') {
            let {location:{query}}=this.props;
            if(!query)query={domain:'xuebang'}
            subDomain=query.domain;
        } else {
            subDomain = hostname.split('.')[0];
        }
        this.getCompanyByDomain(subDomain)
    }


    componentDidMount(){
        // setTimeout(()=>{
        //     console.log(8989);
        //     this.$container.focus();
        // },100)
    }


    render() {
        let {accountToTop, pwdToTop, account, password, name, showPassword, loading} = this.state;
        console.log(password, account);
        return (
            <div className={styles.account} ref={e=>this.$container=e}>
                <div className={styles.company}>{name}</div>
                <div className={styles.tips}>Essential系统</div>
                <div className={styles.form}>
                    <div>
                        <Item
                            label={'账号'}
                            value={account}
                            moveToTop={accountToTop}
                            focus={e => this.setState({accountToTop: true})}
                            blur={this.accountBlur}
                            maxLength={20}
                            change={e => this.setState({account: e.target.value.replace(/\s/g, '')})}
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
                            maxLength={20}
                            change={e => this.setState({password: e.target.value.replace(/\s/g, '')})}
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