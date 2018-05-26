/**
 * Created by luoming on 2018/5/21
 */
import styles from './index.less'
import {Row,Col} from 'antd';
export default class DashBoard extends React.Component{
    state={};
    render(){
        return (
            <div className={styles.dashboard}>
                <Row gutter={20}>
                    <Col xs={24}  md={12} xl={8}>
                        <div className={styles.block}>

                        </div>
                    </Col>
                    <Col xs={24}  md={12} xl={8}>
                        <div className={styles.block}>

                        </div>
                    </Col>
                    <Col xs={24}  md={12} xl={8}>
                        <div className={styles.block}>

                        </div>
                    </Col>
                    <Col xs={24}  md={12} xl={8}>
                        <div className={styles.block}>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}