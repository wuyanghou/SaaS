/**
 * Created by luoming on 2018/5/23
 */
import styles from './index.less';
import src from '../../../Home/Page/test.jpg';
import Radio from 'COMMON_COMPONENT/Radio';

const RadioGroup = Radio.Group
const RadioButton = Radio.RadioButton
export default class AlterPerson extends React.Component{
    state={};
    render(){
        return (
            <div>
                <div className={styles.head}>
                   <span className={styles.title}>个人资料</span>
                </div>
                <div className={styles.block}>
                    <img src={src} alt=""/>
                    <div className={styles.item}>
                        <div>基本信息</div>
                        <div>
                            <span className={styles.label}>姓名</span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span className={styles.label}>性别</span>
                            <RadioGroup onChange={this.onChange} defaultValue="b">
                                <RadioButton value="a">男</RadioButton>
                                <RadioButton value="b">女</RadioButton>
                            </RadioGroup>
                        </div>
                        <div>
                            <span className={styles.label}>签名</span>
                            <input type="text" value="脱身白刃里"/>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div>用户名</div>
                        <div>
                            <span className={styles.label}>用户名</span>
                            <span>{'舞阳侯'}</span>
                        </div>
                        <div>
                            <span className={styles.label}>新用户名</span>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div>手机号码</div>
                        <div>
                            <span className={styles.label}>当前号码</span>
                            <span>{18317943550}</span>
                        </div>
                        <div>
                            <span className={styles.label}>更新号码</span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span className={styles.label}>验证码</span>
                            <input type="text" className={styles.code}/>
                            <span>获取验证码</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div>邮箱地址</div>
                        <div>
                            <span className={styles.label}>当前邮箱</span>
                            <span>{'18317943550@qq.com'}</span>
                        </div>
                        <div>
                            <span className={styles.label}>新邮箱</span>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}