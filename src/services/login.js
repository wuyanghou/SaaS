/**
 * Created by luoming on 2018/5/25
 */

import buildApi from 'UTIL/buildApi';

const apiObj = {
    getCompanyInfo: 'oa/common/getCurrentUserBelongCompany',//获取当前登录公司信息
    login: {url: 'oa/login'},//登录
    logout: 'oa/logout',//退出登录,
    getCompanyList: 'center/systemManage/getCompanyListByContact',//根据手机号获取公司列表
    checkSubDomain: {url: 'center/systemManage/checkSecondDomain'},//检验二级域名是否存在
    getCompanyByDomain: 'center/systemManage/getCompanyDetail',//根据二级域名获取企业信息
    getValiDateCode: 'center/systemManage/getVerification',//忘记域名获取验证码
    getCode:'oa/getVerification',//忘记密码获取验证码 {contact：电话号码}
    checkCode:{url:'oa/checkVerification'},//忘记密码验证码校验{contact:号码，secondDomain：二级域名，verification：验证码}
    resetPassword:{url:'oa/resetPassword'},//重置密码 {contact，password，secondDomain}
};
export default buildApi(apiObj);
