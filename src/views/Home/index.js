/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import {connect} from 'dva';
import {Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import styles from './index.less';
import SideBar from './SideBar/index';
import Page from './Page/index';

const DashBoard = dynamic({
    component: () => import('../Dashboard')
})

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
                <Page>
                    <Switch>
                        <Route path={`/Dashboard`} component={DashBoard}/>
                    </Switch>
                </Page>

            </div>
        )
    }
}
