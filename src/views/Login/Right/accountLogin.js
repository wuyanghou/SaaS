/**
 * Created by luoming on 2018/5/16
 */

import styles from './domain.less';

export default class AccountLogin extends React.Component {
    state = {
        moveToTop: false,
        account:'',
        password:''
    };
    accountBlur=()=>{
        let {account}=this.state;
        if(!account)this.setState({accountToTop:false});
    }
    pwdBlur=()=>{
        let {password}=this.state;
        if(!password)this.setState({pwdToTop:false});
    }
    login=()=>{

    }
    forgetAccount=()=>{
        let {history}=this.props;
        history.push('/login/forgetAccount');
    }
    render() {
        let {accountToTop,pwdToTop,account,password,company,showPassword} = this.state;
        return (
            <div className={styles.account}>
                <div className={styles.company}>{company || '广州学邦信息技术有限公司'}</div>
                <div className={styles.tips}>Essential系统</div>
                <div className={styles.form}>
                    <div>
                        <span className={'domain ' + (accountToTop ? 'top' : '')}>账号</span>
                        <input type="text" onFocus={e=>this.setState({accountToTop:true})} onBlur={this.accountBlur} value={account} onChange={e=>this.setState({account:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <span className={'domain ' + (pwdToTop ? 'top' : '')}>密码</span>
                        <input type={showPassword?'text':'password'} onFocus={e=>this.setState({pwdToTop:true})} onBlur={this.pwdBlur} value={password} onChange={e=>this.setState({password:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={account?false:true} className={account?'':'disabled'} onClick={this.login}>登录</button>
                </div>
                <span onClick={this.forgetAccount}>忘记密码？</span>
            </div>
        )
    }
}