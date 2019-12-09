export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      // console.log('throw error', err);
    },
    initialState: {
      products: [
        {
          name: 'dva',
          id: 1,
        },
        {
          name: 'antd',
          id: 2,
        },
      ],
      verifySessionKey: false,
      // mock test
      testGetList: [],
    },
  },
};
