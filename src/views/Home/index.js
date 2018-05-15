/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import {connect} from 'dva';
import Button from 'COMMON_COMPONENT/Button';
import styles from './index.less';
import {httpPost} from 'SERVICE/http'

// console.log(undefined.splice(1, 1));

console.log(321);
console.log(a);

const mapStateToProps = (state) => {
    return {list: state.users.list}
}
@connect(mapStateToProps)
export default class Home extends React.Component {
    state = {};

    componentDidMount() {
        console.log(...this.props.list);
        httpPost('SaaS', {name: 'luoming', age: 27});
        // console.log(res, 432);
        this.fn();
    }

    fn = () => {
    }

    render() {
        return (
            <div>
                <Button type="primary">点击</Button>
                <h1 className={styles.test}>首页</h1>
            </div>
        )
    }
}
