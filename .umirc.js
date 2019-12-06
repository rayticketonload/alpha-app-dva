const path = require('path');

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'，同时需要在routers.js 文件的BASE_URL也改成/my-app/
// const BASE_URL = process.env.UMI_ENV === 'prod' ? '/' : '/';
let base_u;
switch (process.env.UMI_ENV) {
  case 'local':
    base_u = '/';
    break;
  case 'dev':
    base_u = '/';
    break;
  case 'stage':
    base_u = '/';
    break;
  case 'prod':
    base_u = '/';
    break;
  default:
}
const BASE_URL = base_u;
const nowEnv = process.env.UMI_ENV;
const nowPort = process.env.PORT;

const API_ROOT_MAP = {
  local: 'http://rap2api.taobao.org/app/mock/4132/',
  dev: 'http://rap2api.taobao.org/app/mock/4132/',
  stage: 'http://rap2api.taobao.org/app/mock/4132/',
  prod: 'http://rap2api.taobao.org/app/mock/4132/',
};

var BC_API_ROOT_MAP = {
  local: 'http://rap2api.taobao.org/app/mock/4132/',
  dev: 'http://rap2api.taobao.org/app/mock/4132/',
  stage: 'http://rap2api.taobao.org/app/mock/4132/',
  prod: 'http://rap2api.taobao.org/app/mock/4132/',
};

// ref: https://umijs.org/config/
export default {
  base: BASE_URL,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'system',
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
    port: nowPort,
    '/api': {
      target: API_ROOT_MAP[nowEnv],
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: true,
    },
    '/bc_api': {
      target: BC_API_ROOT_MAP[nowEnv],
      pathRewrite: { '^/bc_api': '/api' },
      changeOrigin: true,
      secure: true,
    },
  },
  theme: './src/antd-theme/recoverAntd.js',
};
