import { Layout } from 'antd';
import { connect } from 'dva';
import Components from '@components';

const { AppHeader, RouterGuard } = Components;

const { Header } = Layout;

function BasicLayout(props) {
  return (
    <RouterGuard source={props} isLogIn={props.verifySessionKey}>
      <Layout className="base-layout">
        <Header className="header-layout">
          <AppHeader />
        </Header>
        {props.children}
      </Layout>
    </RouterGuard>
  );
}

const mapStateToProps = state => {
  return {
    verifySessionKey: state.verifySessionKey,
  };
};

export default connect(mapStateToProps)(BasicLayout);

// export default BasicLayout;
