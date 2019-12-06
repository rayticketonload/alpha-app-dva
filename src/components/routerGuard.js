import React, { Component } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import Cookies from 'js-cookie';
import { Spin, Icon, message } from 'antd';
import QueueAnim from 'rc-queue-anim';
import * as CONST from '@constants';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class RouterGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    const { dispatch, source } = this.props;
    const { query } = source.location;

    // 打开loading状态
    this.setState({
      loading: true,
    })

    if(query[CONST.SSO_KEY_NAME]) {
      // url 带参 sso key
      dispatch({
        type: 'verifySessionKey/verify',
        payload: {
          sessionId: query[CONST.SSO_KEY_NAME],
        },
        callback: (res) => {
          if (res.content) {
            message.success(res.content);
          }
        }
      });
    } else {
      // url 没有带参 sso key

    }
  }

  render() {
    const { props } = this;
    return (
      <>
        <QueueAnim>
          <div className="router-guard-spin-warp">
            <Spin indicator={antIcon} spinning={this.state.loading} />
          </div>
        </QueueAnim>
        {props.children}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    verifySessionKey: state.verifySessionKey,
  };
};

export default connect(mapStateToProps)(RouterGuard);
