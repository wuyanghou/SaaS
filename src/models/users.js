import queryString from 'query-string';
// import * as usersService from '../services';
const usersService={}
export default {
  namespace: 'users',
  state: {
    list: [1,2,3,4,5],
    total: 100,
    page: 10,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      // const { data, headers } = yield call(usersService.fetch, { page });
      //
      // yield put({
      //   type: 'save',
      //   payload: {
      //     data,
      //     total: parseInt(headers['x-total-count'], 10),
      //     page: parseInt(page, 10),
      //   },
      // });
    },
    *remove({ payload: id }, { call, put }) {
      // yield call(usersService.remove, id);
      // yield put({ type: 'reload' });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      // yield call(usersService.patch, id, values);
      // yield put({ type: 'reload' });
    },
    *create({ payload: values }, { call, put }) {
      // yield call(usersService.create, values);
      // yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      // const page = yield select(state => state.users.page);
      // console.log(action.payload,789);
      // yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log(9090);
      return history.listen((location) => {
        // const query = queryString.parse(search);
        // if (pathname === '/users') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
          console.log(location);
      });
    },
  },
};
