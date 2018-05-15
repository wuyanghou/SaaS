/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import {connect} from 'dva';
import Button from 'COMMON_COMPONENT/Button';
import styles from './index.less';
import api from 'SERVICE/home';

const {login, logout, saveInformation} = api;

const mapStateToProps = (state) => {
    return {list: state.users.list}
}
@connect(mapStateToProps)
export default class Home extends React.Component {
    state = {};

    async componentDidMount() {
        console.log(...this.props.list);
        let res = await login({name: 'luoming'});
        console.log(res);
        logout({age: 23});
        saveInformation({color: 'red'});
        this.fn();
    }

    componentWillUnmount() {

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
