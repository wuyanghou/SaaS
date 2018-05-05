/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import Button from 'COMMON_COMPONENT/Button';
import styles from './index.less'
import fn from 'ASSET/js/test';
fn.fn();
export default class Home extends React.Component{
    state={};
    render(){
        return(
            <div>
                <Button type="primary">点击</Button>
                <h1 className={styles.test}>首页</h1>
            </div>
            )
    }
}