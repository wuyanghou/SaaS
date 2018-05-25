/**
 * Created by luoming on 2018/5/23
 */

import {connect} from 'dva';
import {routerRedux} from 'dva/router'
import styles from './index.less';
import Button from 'COMMON_COMPONENT/Button';
import Icon from 'COMMON_COMPONENT/Icon';
import IconButton from 'COMMON_COMPONENT/IconButton';
import src from '../../Home/Page/test.jpg';

@connect()
export default class Personal extends React.Component {
    state = {}

    async componentWillMount() {
        console.log(this.props, 345);
    }

    componentDidMount() {
        // let {dispatch}=this.props;
        //  dispatch({
        //      type:'logout/getData'
        //  })
    }

    edit = () => {
        const {history} = this.props;
        history.push('/Setting/personal/edit')
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className={styles.head}>
                    <span className={styles.title}>个人资料</span>
                    <Button type="primary" onClick={this.edit} iconType={'oa_edit'}>编辑</Button>
                </div>
                <div className={styles.block}>
                    <img src={src} alt=""/>
                    <div className={styles.name}>舞阳侯</div>
                    <div className={styles.sign}>黄河落天走东海，万里写入胸怀间</div>
                    <div className={styles.details}>
                        <div>
                            <div>
                                <Icon type={'oa_account'} size={32}/>
                            </div>
                            <span>
                                 XBXH1204
                            </span>
                        </div>
                        <div>
                            <div>
                                <Icon type={'oa_phone'} size={32}/>
                            </div>
                            <span>
                                18317943550
                            </span>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div>
                            <div>
                                <Icon type={'oa_email'} size={32}/>
                            </div>
                            <span>
                                wuyanghou@qq.com
                            </span>
                        </div>
                        <div>
                            <div>
                                <Icon type={'oa_more'} size={32}/>
                            </div>
                            <span>
                                wuyanghou@qq.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
