import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import * as infoActionCreators from '../../redux/reducers/Info/info';

import {
  // Cover,
  // MenuBar,
  VideoBg
} from '../../components';

import {
  //
} from '../../containers';


@connect(
  state => ({
    time: state.info.time,
  }),
)

export default class Landing extends Component {

  static propTypes = {
    time: PropTypes.string,
  }
  // static defaultProps = {}

  render() {

    // const {
      // time
    // } = this.props;

    // const {} = this.state;

    return (
      <div>
        Landing
        <VideoBg videoId={'NFTaiWInZ44'} />
      </div>
    );
  }
}
