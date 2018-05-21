/**
 * Created by luoming on 2018/5/21
 */
import Item from './item';
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
                        <Item
                            label={'设置密码'}
                            value={oldPwd}
                            moveToTop={phoneToTop}
                            type={'password'}
                            focus={e => this.setState({phoneToTop: true})}
                            blur={this.accountBlur}
                            change={e => this.setState({oldPwd: e.target.value})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <div>
                        <Item
                            label={'确认密码'}
                            value={newPwd}
                            moveToTop={codeToTop}
                            type={'password'}
                            focus={e => this.setState({codeToTop: true})}
                            blur={this.pwdBlur}
                            change={e => this.setState({newPwd: e.target.value})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={(oldPwd && newPwd)?false:true} className={(oldPwd && newPwd)?'':'disabled'} onClick={this.resetPwd}>重置密码</button>
                </div>
                <span onClick={this.goAccountLogin}>返回登录</span>
            </div>
        )
    }
}