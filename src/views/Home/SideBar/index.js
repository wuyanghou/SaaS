/**
 * Created by luoming on 2018/5/21
 */
import styles from './index.less';
import {Link} from 'dva/router';
import IconButton from 'COMMON_COMPONENT/IconButton';

export default class SideBar extends React.Component {
    state = {};

    render() {
        return (
            <div className={styles.sideBar}>
                <div>
                    <IconButton type={'oa_dashboard_mc'} size={24}/>
                    <Link to='/Dashboard'>首页</Link>
                </div>
                <div>
                    <IconButton type={'oa_news_mc'} size={24}/>
                    <Link to='/Dashboard'>消息</Link>
                </div>
                <div>
                    <IconButton type={'oa_notice_mc'} size={24}/>
                    <Link to='/Dashboard'>公告</Link>
                </div>
                <div>
                    <IconButton type={'oa_approve_mc'} size={24}/>
                    <Link to='/Dashboard'>审批</Link>
                </div>
                <div>
                    <IconButton type={'oa_schedule_mc'} size={24}/>
                    <Link to='/Dashboard'>日程</Link>
                </div>
                <div>
                    <IconButton type={'oa_vote_mc'} size={24}/>
                    <Link to='/Dashboard'>投票</Link>
                </div>
                <div>
                    <IconButton type={'oa_report_mc'} size={24}/>
                    <Link to='/Dashboard'>报告</Link>
                </div>
                <div>
                    <IconButton type={'oa_text_mc'} size={24}/>
                    <Link to='/Dashboard'>文档</Link>
                </div>
                <div>
                    <IconButton type={'oa_doc_mc'} size={24}/>
                    <Link to='/Dashboard'>公文</Link>
                </div>
                <div>
                    <IconButton type={'oa_setting_mc'} size={24}/>
                    <Link to='/Dashboard'>设置</Link>
                </div>
            </div>
        )
    }
}
