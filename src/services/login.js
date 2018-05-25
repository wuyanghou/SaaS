/**
 * Created by luoming on 2018/5/25
 */

import buildApi from './buildApi';

const apiObj = {
    getCompanyInfo: 'oa/common/getCurrentUserBelongCompany',//获取当前登录公司信息
    login: {url: 'oa/login'},//登录
    logout: 'oa/logout',//退出登录,
    getCompanyList: 'center/systemManage/getCompanyListByContact',//根据手机号获取公司列表
    checkSubDomain: {url: 'center/systemManage/checkSecondDomain', dataType: 'json'},//检验二级域名是否存在
    getCompanyByDomain: 'center/systemManage/getCompanyDetail',//根据二级域名获取企业信息
    getValiDateCode: 'center/systemManage/getVerification',//获取验证码
};
export default buildApi(apiObj);
