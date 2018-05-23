/**
 * Created by luoming on 2018/5/23
 */

import {connect} from 'dva';
import {routerRedux} from 'dva/router'
import styles from './index.less';
import Button from 'COMMON_COMPONENT/Button';
import src from '../../Home/Page/test.jpg';
@connect()
export default class Personal extends React.Component{
    state={}
    async componentWillMount(){
        console.log(this.props,345);
    }
    componentDidMount(){
       // let {dispatch}=this.props;
       //  dispatch({
       //      type:'logout/getData'
       //  })
    }
    edit=()=>{
        const {history}=this.props;
        history.push('/Setting/personal/edit')
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <div className={styles.head}>
                    <span className={styles.title}>个人资料</span>
                    <Button type="primary" onClick={this.edit}>编辑</Button>
                </div>
                <div className={styles.block}>
                    <img src={src} alt=""/>
                    <div className={styles.name}>舞阳侯</div>
                    <div className={styles.sign}>黄河落天走东海，万里写入胸怀间</div>
                    <div className={styles.details}>
                        <span>
                            XBXH1204
                        </span>
                        <span>
                            18317943550
                        </span>
                        <span>
                            wuyanghou@qq.com
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
