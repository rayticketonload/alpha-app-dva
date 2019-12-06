import { Layout } from 'antd';
import Components from '@components';

const { AppFooter } = Components;

const { Content, Footer } = Layout;

function contentLayout(props) {
  const footer = () => {
    if (props.needFooter) {
      return (
        <Footer className="footer-layout">
          <AppFooter
            copyright="© 2018 Shunwen Infomation Technology Co.,Ltd. All Rights Reserved"
            icp="粤ICP备 22026680号"
          />
        </Footer>
      );
    }
  };

  return (
    <Content
      className={`content-layout animated fadeIn ${props.needFooter ? 'need-footer' : ''} ${props.extraClass}`}
    >
      <div className="app-content">
        {props.children}
      </div>
      {footer()}
    </Content>
  );
}

export default contentLayout;
