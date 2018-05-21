/**
 * Created by luoming on 2018/5/21
 */

import styles from './domain.less';

export default class ForgetAccount extends React.Component {
    state = {
        moveToTop: false,
        phone:'',
        code:''
    };
    accountBlur=()=>{
        let {phone}=this.state;
        if(!phone)this.setState({phoneToTop:false});
    }
    pwdBlur=()=>{
        let {code}=this.state;
        if(!code)this.setState({codeToTop:false});
    }
    getCode=()=>{

    }
    resetPassword=()=>{
        let {history}=this.props;
        history.push('/login/resetPassword');
    }
    goAccountLogin=()=>{
        let {history}=this.props;
        history.push('/login/accountLogin')
    }
    render() {
        let {phoneToTop,codeToTop,phone,code} = this.state;
        return (
            <div className={styles.account}>
                <div className={styles.company}>忘记登录密码</div>
                <div className={styles.tips}>通过手机号码找回密码</div>
                <div className={styles.form}>
                    <div>
                        <span className={'domain ' + (phoneToTop ? 'top' : '')}>手机号码</span>
                        <input type="text" onFocus={e=>this.setState({phoneToTop:true})} onBlur={this.accountBlur} value={phone} onChange={e=>this.setState({phone:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <span className={'domain ' + (codeToTop ? 'top' : '')}>验证码</span>
                        <span className={styles.getCode} onClick={this.getCode}>获取验证码</span>
                        <input type='text' onFocus={e=>this.setState({codeToTop:true})} onBlur={this.pwdBlur} value={code} onChange={e=>this.setState({code:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={(phone && code)?false:true} className={(phone && code)?'':'disabled'} onClick={this.resetPassword}>找回登录密码</button>
                </div>
                <span onClick={this.goAccountLogin}>返回登录</span>
            </div>
        )
    }
}