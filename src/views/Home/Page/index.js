import styles from './index.less';

export default class Page extends React.Component{
    state={};
    render(){
        return (
            <div className={styles.page}>
                {this.props.children}
            </div>
        )
    }
}