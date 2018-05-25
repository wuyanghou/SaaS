/**
 * Created by luoming on 2018/5/24
 */

import styles from './modal.less';
import {Croppie} from 'croppie';
import 'croppie/croppie.css'
import Modal from 'COMMON_COMPONENT/Modal';
import img from './test.jpg';

console.log(Croppie);
export default class PicModal extends React.Component {
    resize = null;
    state = {
        value: 0,
        loading: false
    };
    onClose = () => {
        this.props.onClose();
    }
    onOk = () => {
        this.setState({loading: true});
        this.resize.result().then((res) => {
            this.setState({loading:false});
             this.props.onSuccess(res);
        })
    }

    onLoad = (e) => {

    }
    slideChange = (val) => {
        this.setState({value: val});
        let ratio = (val + 33.33) / 33.33;
        this.$img.width = this.width * ratio;
        this.$img.height = this.height * ratio;

        let countLeft = this.width * (ratio - 1) / 2;
        this.$img.style.left = this.offsetLeft - countLeft + 'px'
    }

    componentDidMount() {

        let resize = new Croppie(this.$contain, {
            viewport: {
                width: 240,
                height: 240,
                type: 'circle'
            },
            boundary: {
                width: 320,
                height: 320
            },
            maxZoom: 3
        });
        resize.bind({
            url: img,
            // zoom:1
        });
        this.resize = resize;
    }

    componentWillUnmount() {
        this.resize.destroy();
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
        let {value, loading} = this.state;
        return (
            <Modal loading={loading}
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
                    <div ref={e => this.$contain = e}>
                    </div>
                </div>
            </Modal>
        )
    }
}