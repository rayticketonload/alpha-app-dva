const path = require('path');

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'alpha-app-dva',
        dll: false,
        disableCSSModules: true,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  alias: {
    '@src': path.resolve(__dirname, 'src'),
    '@api': path.resolve(__dirname, 'src/request/api.js'),
    '@style': path.resolve(__dirname, 'src/style'),
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@pages': path.resolve(__dirname, 'src/pages'),
  },
  proxy: {
    '/api': {
      target: 'http://rap2api.taobao.org/app/mock/4132/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: './src/antd-theme/tap.js',
};
