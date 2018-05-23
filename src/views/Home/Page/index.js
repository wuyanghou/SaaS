import {connect} from 'dva';
import styles from './index.less';
import DropdownMenu from 'COMMON_COMPONENT/DropdownMenu';
import test from './test.jpg'
@connect()
export default class Page extends React.Component{
    state={};
    render(){
        let {history}=this.props;
        const menus = [
            { text: '个人资料',onClick:()=>history.push('/Setting/personal') },
            { text: '修改密码',onClick:()=>history.push('/Setting/alterpwd') },
            { text: '退出登录' }
        ]
        const content= (<div className="top"><span>{'舞阳侯'}</span><span><img src={test} alt=""/></span></div>)
        return (
            <div className={styles.page}>
                <div className={'head'}>
                    <div>search</div>
                    <DropdownMenu
                        menus={menus}
                        isCustom
                        content={content}
                        activeContent={content}
                        getPopupContainer={()=>document.querySelector('top')}
                    />
                </div>
                {this.props.children}
            </div>
        )
    }
}