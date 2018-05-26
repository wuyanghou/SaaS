/**
 * Created by luoming on 2018/5/15
 */
import request from './axios.config';
import qs from 'qs';
import showMessage from 'COMMON_COMPONENT/utils/globalTips/showMessage'

const gotoLoginPage = () => {
    window.location.href = window.location.origin+'/login/accountLogin';
}

let loginTimeoutHandled;
const handleError = (e, noTips) => {
    console.log('logout');
    if (e.errorType === 3) {
        if (!loginTimeoutHandled) {
            showMessage(e.text);
            setTimeout(()=>gotoLoginPage(),500);
            loginTimeoutHandled = true;
        }
    } else {
        if (!noTips) {
            showMessage(e.text)
        }
        throw e
    }
}
const httpGet = async (url, params) => {
    try {
        return await request(url, {params});
    } catch (e) {
        handleError(e)
    }
}
const httpPost = async (url, params, dataType) => {
    try {
        let option = {method: 'post'};
        if (dataType === 'json') {
            option = {
                ...option,
                data:params,
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
            }
        }else{
            option = {
                ...option,
                data:qs.stringify(params),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }
        }
        return await request(url,option)
    }catch(e){
        handleError(e)
    }
}

export {httpGet,httpPost}