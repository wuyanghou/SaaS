/**
 * Created by luoming on 2018/5/16
 */
import {connect} from 'dva';
import styles from './domain.less';
@connect()
export default class DomainLogin extends React.Component {
    state = {moveToTop: false,domain:''};
    focus = () => {
        this.setState({moveToTop: true})
    }
    blur=()=>{
        let {domain}=this.state;
        if(!domain)this.setState({moveToTop:false});
    }
    next=()=>{
      let {dispatch,history}=this.props;
        history.push('/login/accountLogin');
    }
    forgetDomain=()=>{
        let {history}=this.props;
        history.push('/login/forgetDomain')
    }
    render() {
        let {moveToTop,domain} = this.state;
        return (
            <div className={styles.domain}>
                <div>登录Essential系统</div>
                <div className={styles.form}>
                    <div>
                        <span className={'domain ' + (moveToTop ? 'top' : '')}>企业域名</span>
                        <input type="text" onFocus={this.focus} onBlur={this.blur} value={domain} onChange={e=>this.setState({domain:e.target.value})}/>
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={domain?false:true} className={domain?'':'disabled'} onClick={this.next}>下一步</button>
                </div>
                <span onClick={this.forgetDomain}>忘记企业域名？</span>
            </div>
        )
    }
}