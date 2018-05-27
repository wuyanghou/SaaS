/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import {connect} from 'dva';
import {Route, Switch,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic';
import styles from './index.less';
import SideBar from './SideBar/index';
import Page from './Page/index';

const DashBoard = dynamic({
    component: () => import('../Dashboard')
})
const Personal = dynamic({
    component: () => import('../Setting/Personal')
})
const PersonalEdit = dynamic({
    component: () => import('../Setting/Personal/Edit')
})
const NotFound = dynamic({
    component: () => import('../404')
})
const mapStateToProps = (state) => {
    return {list: state.users.list}
}
@connect(mapStateToProps)
export default class Home extends React.Component {
    state = {};

    async componentDidMount() {
    }

    componentWillMount() {
        const {location, history} = this.props;
        if (location.pathname === '/') {
            history.push('/Dashboard')
        }
    }

    fn = () => {
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <SideBar/>
                <Page history={history}>
                    <Switch>
                        <Route path='/Dashboard' component={DashBoard}/>
                        <Route path='/Setting/personal' exact component={Personal}/>
                        <Route path='/Setting/personal/edit' exact component={PersonalEdit}/>
                        <Route path='/Setting/alterpwd' component={DashBoard}/>
                        <Redirect to="/Dashboard" />
                    </Switch>
                </Page>
            </div>
        )
    }
}
