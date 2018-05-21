/**
 * Created by luoming on 2018/5/21
 */

import styles from './domain.less';

export default class ForgetDomain extends React.Component {
    state = {
        moveToTop: false,
        oldPwd:'',
        newPwd:''
    };
    accountBlur=()=>{
        let {oldPwd}=this.state;
        if(!oldPwd)this.setState({phoneToTop:false});
    }
    pwdBlur=()=>{
        let {newPwd}=this.state;
        if(!newPwd)this.setState({codeToTop:false});
    }

    resetPwd=()=>{

    }
    goAccountLogin=()=>{
        let {history}=this.props;
        history.push('/login/accountLogin');
    }
    render() {
        let {phoneToTop,codeToTop,oldPwd,newPwd,showOldPwd,showNewPwd} = this.state;
        return (
            <div className={styles.account}>
                <div className={styles.company}>找回登录密码</div>
                <div className={styles.tips}>请设置新密码</div>
                <div className={styles.form}>
                    <div>
                        <span className={'domain ' + (phoneToTop ? 'top' : '')}>设置密码</span>
                        <input type={showOldPwd?'text':'password'} onFocus={e=>this.setState({phoneToTop:true})} onBlur={this.accountBlur} value={oldPwd} onChange={e=>this.setState({oldPwd:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <span className={'domain ' + (codeToTop ? 'top' : '')}>确认密码</span>
                        <input type={showNewPwd?'text':'password'} onFocus={e=>this.setState({codeToTop:true})} onBlur={this.pwdBlur} value={newPwd} onChange={e=>this.setState({newPwd:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={(oldPwd && newPwd)?false:true} className={(oldPwd && newPwd)?'':'disabled'} onClick={this.resetPwd}>重置密码</button>
                </div>
                <span onClick={this.goAccountLogin}>返回登录</span>
            </div>
        )
    }
}