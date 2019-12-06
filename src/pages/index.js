import React, { Component } from 'react';
import { connect } from 'dva';
import ContentLayout from '@layouts/contentLayout';

class Home extends Component {
  constructor(props) {
    super();
  }

  // testGetList = () => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'testGetList/testGetList',
  //   });
  // };

  componentDidMount() {
    // this.testGetList();
  }

  render() {
    return (
      <ContentLayout>
        home
        <div style={{height: 1000}}></div>
      </ContentLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Home);
