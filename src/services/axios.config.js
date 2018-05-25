/**
 * Created by luoming on 2018/5/5
 */
import axios from 'axios';
import errors from 'CONSTANT/config';

const defaultOption = {
    baseURL: '/',
    method: 'get',
    withCredentials: true
}
const request = async (url, option) => {
    option = {...defaultOption, ...option, url};
    let res
    try {
        res = await axios(option);
    } catch (e) {
        throw errors.netError;
    }
    const {status, data} = res;

    if (status > 500) {
        throw errors.systemError
    } else if (status === 401) {
        throw errors.loginTimeout
    } else if (status !== 200 && status !== 400 && status !== 500) {
        throw errors.netError
    }

    if (status === 400 || status === 500) {
        const {resultCode, resultMessage} = data
        if (resultCode !== 0 && resultMessage) {
            throw {...errors.systemError, text: resultMessage}
        }
        throw errors.systemError
    }
    return data;
}
export default request;