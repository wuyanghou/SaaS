/**
 * Created by luoming on 2018/5/21
 */

import styles from './domain.less';

export default class ForgetDomain extends React.Component {
    state = {moveToTop: false, domain: ''};
    accountBlur = () => {
        let {phone} = this.state;
        if (!phone) this.setState({phoneToTop: false});
    }
    pwdBlur = () => {
        let {code} = this.state;
        if (!code) this.setState({codeToTop: false});
    }
    getCode = () => {

    }
    getDomain = () => {

    }
    goDomainLogin = () => {
        let {history} = this.props;
        history.push('/login/domainLogin')
    }
    goLoginHref=(e)=>{
        console.log(e.target.dataset.href);
    }

    render() {
        let {phoneToTop, codeToTop, phone, code,showResult=true} = this.state;
        return (
            <div style={{height:'100%'}}>
                {showResult?
                    <div className={styles.account}>
                        <div className={styles.company}>找回企业域名</div>
                        <div className={styles.infos}>
                            通过您申请找回手机号 &nbsp;&nbsp;<span>18317943550</span> &nbsp;
                            关联的oa企业域名，我们找到了2个企业，点击企业名进行登录：
                        </div>
                        <ul className={styles.companyList}>
                            <li onClick={this.goLoginHref} data-href="baidu.com">广州学邦信息技术公司1</li>
                            <li onClick={this.goLoginHref}  data-href="tencent.com">广州学邦信息技术公司2</li>
                        </ul>
                    </div>
                    :
                    <div className={styles.account}>
                        <div className={styles.company}>忘记企业域名</div>
                        <div className={styles.tips}>通过手机号码找回域名</div>
                        <div className={styles.form}>
                            <div>
                                <span className={'domain ' + (phoneToTop ? 'top' : '')}>手机号码</span>
                                <input type="text" onFocus={e => this.setState({phoneToTop: true})} onBlur={this.accountBlur}
                                       value={phone} onChange={e => this.setState({phone: e.target.value})}/>
                            </div>
                            <span className={styles.line}></span>
                            <div>
                                <span className={'domain ' + (codeToTop ? 'top' : '')}>验证码</span>
                                <span className={styles.getCode} onClick={this.getCode}>获取验证码</span>
                                <input type='text' onFocus={e => this.setState({codeToTop: true})} onBlur={this.pwdBlur}
                                       value={code} onChange={e => this.setState({code: e.target.value})}/>
                            </div>
                            <span className={styles.line}></span>
                            <button disabled={(phone && code) ? false : true} className={(phone && code) ? '' : 'disabled'}
                                    onClick={this.getDomain}>找回企业域名
                            </button>
                        </div>
                        <span onClick={this.goDomainLogin}>返回登录</span>
                    </div>
                }
            </div>
        )
    }
}