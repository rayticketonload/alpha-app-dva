import { login } from '@api';

export default {
  namespace: 'loginStatus',
  state: false,
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({ type: 'save', data: response.data.result });
      console.log('loginStatus', response);
    },
  },
  reducers: {
    save(state, payload) {
      return payload.data
    },
  },
};
