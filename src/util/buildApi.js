import {httpGet,httpPost} from './http';

const buildApi=(apiObj)=>{
    let obj={};
    Object.keys(apiObj).forEach((v,k)=>{
       if(typeof apiObj[v]==='string'){
           obj[v]=(params)=>{
               return httpGet(apiObj[v],params);
           }
       }else if(typeof apiObj[v]==='object'){
           obj[v]=(params)=>{
               return httpPost(apiObj[v].url,params,apiObj[v].dataType)
           }
       }
    })
    return obj;
}
export default buildApi;