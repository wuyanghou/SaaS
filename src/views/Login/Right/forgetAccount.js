/**
 * Created by luoming on 2018/5/21
 */
import Item from './item';
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
                        <Item
                            label={'手机号码'}
                            value={phone}
                            moveToTop={phoneToTop}
                            focus={e => this.setState({phoneToTop: true})}
                            blur={this.accountBlur}
                            change={e => this.setState({phone: e.target.value})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <Item
                            label={'验证码'}
                            value={code}
                            moveToTop={codeToTop}
                            focus={e => this.setState({codeToTop: true})}
                            blur={this.pwdBlur}
                            change={e => this.setState({code: e.target.value})}>
                            <span className={styles.getCode} onClick={this.getCode}>获取验证码</span>
                        </Item>
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={(phone && code)?false:true} className={(phone && code)?'':'disabled'} onClick={this.resetPassword}>找回登录密码</button>
                </div>
                <span onClick={this.goAccountLogin}>返回登录</span>
            </div>
        )
    }
}