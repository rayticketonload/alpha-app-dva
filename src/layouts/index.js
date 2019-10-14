import { Layout } from 'antd';
import Components from '@components';

const { AppHeader } = Components;

const { Header } = Layout;

function BasicLayout(props) {
  return (
    <Layout className="base-layout">
      <Header className="header-layout">
        <AppHeader />
      </Header>
      {props.children}
    </Layout>
  );
}

export default BasicLayout;
