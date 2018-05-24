/**
 * Created by luoming on 2018/5/24
 */

import styles from './modal.less';
import Modal from 'COMMON_COMPONENT/Modal';
import {Slider} from 'antd';
import img from './test.jpg';

export default class PicModal extends React.Component {
    width=0;
    height=0;
    flag=false;
    state = {
        value: 0
    };
    onClose = () => {

    }
    onOk = () => {

    }

    onLoad = (e) => {
        let {width, height} = e.target;
        let ratio = width / height;
        if (ratio > 1) {
            height = 320;
            width = 320 * ratio
        } else {
            width = 320;
            height = 320 / ratio;
        }
        this.$img.width = width;
        this.$img.height = height;
        this.width=width;
        this.height=height
        this.offsetLeft=this.$img.offsetLeft;
        this.offsetTop=this.$img.offsetTop;
    }
    slideChange = (val) => {
        this.setState({value: val});
        let ratio = (val + 33.33) / 33.33;
        this.$img.width=this.width*ratio;
        this.$img.height=this.height*ratio;

        let countLeft=this.width*(ratio-1)/2;
        this.$img.style.left=this.offsetLeft-countLeft+'px'
    }
    componentDidMount(){
        this.addEvent(this.$img, 'mousedown', (ev) => {
            let oEvent = this.prEvent(ev);
            let oParent = this.$img.parentNode;
            let disX = oEvent.clientX - this.$img.offsetLeft;
            let disY = oEvent.clientY - this.$img.offsetTop;
            let tag = true;
            let startMove = (ev) => {
                if (tag) {
                    let oEvent = ev || window.event,
                        l = oEvent.clientX - disX,
                        t = oEvent.clientY - disY;
                        this.$img.style.left = l + 'px';
                        this.$img.style.top = t + 'px';
                        oParent.onselectstart = () => {
                            return false;
                        }
                }
            }
            let endMove = (ev) => {
                tag = false;
                oParent.onselectstart = null;
                this.removeEvent(oParent, 'mousemove', startMove);
                this.removeEvent(oParent, 'mouseup', endMove);
            };
            this.addEvent(oParent, 'mouseout', endMove);
            this.addEvent(oParent, 'mousemove', startMove);
            this.addEvent(oParent, 'mouseup', endMove);
            return false;
        });
    }

    addEvent = (obj, sType, fn) => {
        if (obj.addEventListener) {
            obj.addEventListener(sType, fn, false);
        } else {
            obj.attachEvent('on' + sType, fn);
        }
    };
    removeEvent = (obj, sType, fn) => {
        obj.removeEventListener(sType, fn, false);
    }
    prEvent = (ev) => {
        let oEvent = ev || window.event;
        if (oEvent.preventDefault) {
            oEvent.preventDefault();
        }
        return oEvent;
    }

    render() {
        let {value} = this.state;
        return (
            <Modal loading={false}
                   onCancel={this.onClose}
                   onOk={this.onOk}
                   title="编辑头像"
                   width={400}
                   okText='保存'
                   closable={true}
                   okBtnShow={true}
                   noLine={true}
                   cancelBtnShow={true}
                   className={styles.modal}
                   ref={e => this.$modal = e}>
                <div>
                    <div className={styles.block}>
                        <img src={img} onLoad={this.onLoad} alt="" ref={e => this.$img = e}/>
                    </div>
                    <Slider value={value} onChange={this.slideChange} tipFormatter={null}/>
                </div>
            </Modal>
        )
    }
}