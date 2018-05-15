import buildApi from './buildApi';
const apiObj={
    login:'loginSystem',
    logout:'logoutSystem',
    saveInformation:{url:'saveInformation',dataType:'json'}
}
;
export default buildApi(apiObj);
