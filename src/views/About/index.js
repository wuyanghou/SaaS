/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import Button from 'COMMON_COMPONENT/Button';
import fn from 'ASSET/js/test';
fn.fn();
console.log(bbb);
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>关于页</h1>
                <Button type={'primary'}>按钮</Button>
            </div>
            )
    }
}