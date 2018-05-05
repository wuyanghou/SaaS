/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import Button from 'COMMON_COMPONENT/Button';
import fn from 'ASSET/js/test';
fn.fn();
export default class Home extends React.Component{
    state={};
    render(){
        return (
            <div>
                <h1>登录页</h1>
                <Button type={'primary'}>按钮</Button>
            </div>
            )
    }
}