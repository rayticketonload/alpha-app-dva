import { testGetList } from '@api';

export default {
  namespace: 'testGetList',
  state: false,
  effects: {
    *testGetList({ payload }, { call, put }) {
      const response = yield call(testGetList, payload);
      yield put({ type: 'save', data: response.data.data });
    },
  },
  reducers: {
    save(state, payload) {
      return payload.data
    },
  },
};
