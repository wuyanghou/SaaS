import styles from './item.less';
export default class Item extends React.Component{
    state={};
    render(){
        let {label,value,moveToTop,focus,blur,change,type,maxLength,showTips,tipContent}=this.props;
        console.log(showTips);
        return (
            <div>
                <span className={'domain ' + (moveToTop ? 'top' : '')}>{label}</span>
                {this.props.children}
                <input type={type?'password':'text'} onFocus={focus} onBlur={blur} value={value} onChange={e=>change(e)} maxLength={maxLength}/>
                {showTips &&
                    <div className={styles.tips}>{tipContent?tipContent:'*格式错误'}</div>
                }
            </div>
        )
    }
}