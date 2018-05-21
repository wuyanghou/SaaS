/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import {connect} from 'dva';
import {Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import Button from 'COMMON_COMPONENT/Button';
import styles from './index.less';
import SideBar from './SideBar/index';

const DashBoard =dynamic({
    component:()=>import('../Dashboard')
})

import api from 'SERVICE/home';
const {login, logout, saveInformation} = api;
const mapStateToProps = (state) => {
    return {list: state.users.list}
}
@connect(mapStateToProps)
export default class Home extends React.Component {
    state = {};

    async componentDidMount() {
    }

    componentWillUnmount() {

    }

    fn = () => {
    }

    render() {
        return (
            <div>
                <SideBar/>
                <Switch>
                    <Route path={`${this.props.match.path}/Dashboard`} component={DashBoard}/>
                </Switch>
            </div>
        )
    }
}
