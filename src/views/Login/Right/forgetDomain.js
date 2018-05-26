/**
 * Created by luoming on 2018/5/21
 */
import Item from './item';
import Loading from 'COMMON_COMPONENT/Loading';
import showMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import styles from './domain.less';

import LoginApi from 'SERVICE/login';

const {getValiDateCode,getCompanyList}=LoginApi;

export default class ForgetDomain extends React.Component {
    codeLimit=0;
    state = {
        moveToTop: false,
        phone:'',
        code:'',
        validate:true,
        codeValidate:true
    };
    accountBlur = () => {
        let {phone} = this.state;
        if (!phone){
            this.setState({phoneToTop: false,validate:true});
        }else{
            let validate = /(^010\d{8}$)|(^010-\d{8}$)|(^02[0-9]\d{8}$)|(^02[0-9]-\d{8}$)|(^0[3-9]\d{2}-\\d{7,8}$)|((^0[3-9]\d{9,10}$))|(^[2-9]\d{6,7}$)|(^13\d{9}$)|(^14[145678]\d{8}$)|(^15\d{9}$)|(^166\d{8}$)|(^17[01345678]\d{8}$)|(^18\d{9}$)|(^19[89]\d{8}$)/.test(phone)
            this.setState({validate});
        }
    }
    pwdBlur = () => {
        let {code} = this.state;
        if (!code){
            this.setState({codeToTop: false,codeValidate:true});
        }else{
            let codeValidate = /\d{6}/.test(code);
            this.setState({codeValidate: codeValidate});
        }
    }
    getCode =async () => {
       const {phone,validate}=this.state;
       if(!phone){
           showMessage('请输入手机号码！');
           return;
       }
        if(!validate){
            showMessage('电话号码不合格！');
            return;
        }
        if(this.codeLimit===0){
            let {resultCode,resultMessage}=await getValiDateCode({contact:phone});
            if(resultCode===0){
                this.codeLimit=1;
                let count=59;
                this.setState({codeDisabled:true});
                this.timer=setInterval(()=>{
                    this.$code.innerHTML=`${count--} s`;
                    if(count===0){
                        clearInterval(this.timer);
                        this.$code.innerHTML='获取验证码';
                        this.codeLimit=0;
                        this.setState({codeDisabled:false});
                    }
                },1000)
            }else{
                showMessage(resultMessage);
            }
        }
    }
    getDomain = async () => {
       const{phone,code}=this.state;
       this.setState({loading:true});
       clearInterval(this.timer);
       const {data}=await getCompanyList({contact:phone,verification:code});
       const companyList=data.map((v,k)=>{
           return {
               loginUrl:v.loginUrl,
               name:v.name,
               secondDomain:v.secondDomain,
               id:v.id
           }
       })
        this.setState({companyList,loading:false,showResult:true});
    }
    goDomainLogin = () => {
        let {history} = this.props;
        history.push('/login/domainLogin')
    }
    goLoginHref=(e)=>{
        console.log(e.target.dataset.href);
        const {protocol,hostname}=window.location;
        const {history}=this.props;
        if(hostname==='localhost'){
            history.push({
                pathname:'/login/accountLogin',
                query:{domain:e.target.dataset.subdomain}
            })
        }else{
            let subDomain=hostname.split('.').splice(0,e.target.dataset.secondDomain).join('.');
            window.location.href=protocol+'//'+subDomain+'/login/accountLogin';
        }
    }

    render() {
        let {phoneToTop, codeToTop, phone, code,showResult,loading,validate,codeValidate,companyList=[],codeDisabled} = this.state;
        return (
            <div style={{height:'100%',display:'inline-block'}}>
                {showResult?
                    <div className={styles.account}>
                        <div className={styles.company}>找回企业域名</div>
                        <div className={styles.infos}>
                            通过您申请找回手机号 &nbsp;&nbsp;<span>18317943550</span> &nbsp;
                            关联的oa企业域名，我们找到了2个企业，点击企业名进行登录：
                        </div>
                        <ul className={styles.companyList}>
                            {
                                companyList.map((v,k)=>{
                                   return <li onClick={this.goLoginHref} data-subDomain={v.secondDomain} key={v.id}>{v.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    :
                    <div className={styles.account}>
                        <div className={styles.company}>忘记企业域名</div>
                        <div className={styles.tips}>通过手机号码找回域名</div>
                        <div className={styles.form}>
                            <div>
                                <Item
                                    label={'手机号码'}
                                    value={phone}
                                    moveToTop={phoneToTop}
                                    focus={e => this.setState({phoneToTop: true})}
                                    blur={this.accountBlur}
                                    maxLength={11}
                                    showTips={!validate}
                                    change={e => this.setState({phone: e.target.value})}
                                />
                            </div>
                            <span className={styles.line}></span>
                            <div>
                                <Item
                                    label={'验证码'}
                                    value={code}
                                    moveToTop={codeToTop}
                                    type={'password'}
                                    focus={e => this.setState({codeToTop: true})}
                                    blur={this.pwdBlur}
                                    maxLength={6}
                                    showTips={!codeValidate}
                                    change={e => this.setState({code: e.target.value})}
                                >
                                    <span className={styles.getCode + (!codeDisabled?'':' codeDisabled')} onClick={this.getCode} ref={e=>this.$code=e}>获取验证码</span>
                                </Item>
                            </div>
                            <span className={styles.line}></span>
                            <button disabled={(phone && code && validate && codeValidate) ? false : true} className={(phone && code && validate && codeValidate) ? '' : 'disabled'}
                                    onClick={this.getDomain}>找回企业域名
                            </button>
                        </div>
                        <span onClick={this.goDomainLogin}>返回登录</span>
                    </div>
                }
                <Loading loading={loading}/>
            </div>
        )
    }
}