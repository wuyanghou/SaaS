export default {
  namespace: 'logout',
  state: {
  },
  effects: {
    * getData({payload}, {put, call}) {
      yield put({
        type: 'deleteData',
        payload: {age: 567}
      })
    },
    * deleteData({payload}, {put, call}) {

    }
  },
  reducers: {

  }

}
