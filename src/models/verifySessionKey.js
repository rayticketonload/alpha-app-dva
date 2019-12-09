import { message } from 'antd';
import { verifySessionKey } from '@api';

export default {
  namespace: 'verifySessionKey',
  state: false,
  effects: {
    *verify({ payload, callback}, { call, put }) {
      const response = yield call(verifySessionKey, payload);
      if (callback && typeof callback === 'function') {
        callback(response);
      } else {
        message.error('request callback need to be a function');
      }
      yield put({ type: 'save', data: true });
    },
  },
  reducers: {
    save(state, payload) {
      return payload.data
    },
  },
};
