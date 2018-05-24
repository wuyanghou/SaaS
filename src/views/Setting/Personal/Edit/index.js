/**
 * Created by luoming on 2018/5/23
 */
import styles from './index.less';
import src from '../../../Home/Page/test.jpg';
import Radio from 'COMMON_COMPONENT/Radio';
import ShowMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage';
import Button from 'COMMON_COMPONENT/Button';
import Modal from './modal';

const RadioGroup = Radio.Group;
const RadioButton = Radio.RadioButton;
export default class AlterPerson extends React.Component {
    state = {
        name: '',
        sex: 'male',
        sign: '',
        userName: '',
        phone: '',
        code: '',
        email: '',
        showCode: false,
        showModal: true
    };
    getCode = () => {
        const {phone} = this.state;
        if (!phone) {
            ShowMessage('请填写手机号！');
            return;
        }
    }
    save = () => {
        const {name, sex, sign, userName, phone, code, email} = this.state;
    }
    cancel = () => {

    }

    render() {
        let {name, sex, sign, userName, phone, code, email, showCode, showModal} = this.state;
        return (
            <div>
                <div className={styles.head}>
                    <span className={styles.title}>个人资料</span>
                </div>
                <div className={styles.block}>
                    <div className={styles.headPic}>
                        <div>
                            <img src={src} alt=""/>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <span className={styles.label}>姓名</span>
                            <input type="text" value={name} onChange={e => this.setState({name: e.target.value})}/>
                        </div>
                        <div>
                            <span className={styles.label}>性别</span>
                            <RadioGroup onChange={e => this.setState({sex: e.target.value})} value={sex}>
                                <RadioButton value="male">男</RadioButton>
                                <RadioButton value="female">女</RadioButton>
                            </RadioGroup>
                        </div>
                        <div>
                            <span className={styles.label}>签名</span>
                            <input type="text" value={sign} onChange={e => this.setState({sign: e.target.value})}/>
                        </div>
                        <div>
                            <span className={styles.label}>用户名</span>
                            <input type="text" value={userName}
                                   onChange={e => this.setState({userName: e.target.value})}/>
                        </div>
                        <div>
                            <span className={styles.label}>电话号码</span>
                            <input type="text" value={phone} onChange={e => this.setState({phone: e.target.value})}
                                   onFocus={e => this.setState({showCode: true})}/>
                        </div>
                        <div>
                            {showCode &&
                            <span>
                                    <span className={styles.label}>验证码</span>
                                    <input type="text" className={styles.code} value={code}
                                           onChange={e => this.setState({code: e.target.value})}/>
                                    <span onClick={this.getCode}>获取验证码</span>
                                </span>
                            }

                        </div>
                        <div>
                            <span className={styles.label}>新邮箱</span>
                            <input type="text" value={email} onChange={e => this.setState({email: e.terget.value})}/>
                        </div>
                        <div className={styles.checkBtn}>
                            <Button type="primary" onClick={this.save}>保存</Button>
                            <Button onClick={this.cancel}>取消</Button>
                        </div>
                    </div>
                </div>
                {showModal &&
                    <Modal/>
                }
            </div>
        )
    }
}