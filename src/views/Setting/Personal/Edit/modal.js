/**
 * Created by luoming on 2018/5/24
 */

import styles from './modal.less';
import {Croppie} from 'croppie';
import 'croppie/croppie.css'
import Modal from 'COMMON_COMPONENT/Modal';
import img from './test.jpg';
import ss from './qa.jpg';

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
            this.setState({loading: false});
            this.props.onSuccess(res);
        })
    }

    onLoad = (e) => {

    }

    componentDidMount() {
        let {src} = this.props;
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading:false})
            let resize = new Croppie(this.$contain, {
                maxZoom: 3,
                viewport: {
                    width: 240,
                    height: 240,
                    type: 'circle'
                },
                boundary: {
                    width: 320,
                    height: 320
                },

            });
            this.resize = resize;
            resize.bind({
                url: src,
                // zoom: 1,
            }).then((res) => {
            });
        }, 500)

    }

    componentWillUnmount() {
        this.resize.destroy();
    }

    render() {
        let {loading} = this.state;
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
                    <div ref={e => this.$contain = e} style={{minHeight:320,minWidth:320}}>
                    </div>
                </div>
            </Modal>
        )
    }
}