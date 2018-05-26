/**
 * Created by luoming on 2018/5/16
 */
import {connect} from 'dva';
import showMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import Loading from 'COMMON_COMPONENT/Loading';
import Item from './item';
import styles from './domain.less';

import LogApi from 'SERVICE/login';

const {checkSubDomain} = LogApi;


@connect()
export default class DomainLogin extends React.Component {
    state = {moveToTop: false, domain: ''};
    focus = () => {
        this.setState({moveToTop: true})
    }
    blur = () => {
        let {domain} = this.state;
        if (!domain) this.setState({moveToTop: false});
    }
    next = async () => {
        let {domain} = this.state;
        if (domain.length < 4) {
            showMessage('域名过短，请修改！');
            return;
        }
        let validate = /[^0-9a-zA-Z_]/.test(domain);
        if (validate) {
            showMessage('域名只能包含数字字母及下划线，请修改！');
            return;
        }
        this.setState({loading: true});
        const {resultCode, resultMessage} = await checkSubDomain({secondDomain: domain});
        this.setState({loading: false});
        let {dispatch, history} = this.props;
        if (resultCode === 0) {
             const {protocol,hostname}=window.location
            if(hostname !=='localhost'){
               let subDomain=hostname.split('.').splice(0,domain).join('.');
               window.location.href=protocol+'//'+subDomain+'/login/accountLogin';
            }else{
                history.push({
                     pathname: '/login/accountLogin',
                     query: {
                         domain,
                     }
                 })
            }
        } else {
            showMessage(resultMessage || '域名不存在');
            return;
        }
        console.log(resultCode, resultMessage);
    }
    forgetDomain = () => {
        let {history} = this.props;
        history.push('/login/forgetDomain')
    }

    render() {
        let {moveToTop, domain, loading} = this.state;
        return (
            <div className={styles.domain}>
                <div>登录Essential系统</div>
                <div className={styles.form}>
                    <div>
                        <Item
                            label={'企业域名'}
                            value={domain}
                            moveToTop={moveToTop}
                            focus={e => this.setState({moveToTop: true})}
                            blur={this.blur}
                            maxLength={20}
                            change={e => this.setState({domain: e.target.value.replace(/\s/g, '')})}
                        />
                    </div>
                    <span className={styles.line}></span>
                    <button disabled={domain ? false : true} className={domain ? '' : 'disabled'} onClick={this.next}>
                        下一步
                    </button>
                </div>
                <span onClick={this.forgetDomain}>忘记企业域名？</span>
                <Loading loading={loading}/>
            </div>
        )
    }
}