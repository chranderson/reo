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
  static defaultProps = {
    yolo: false
  }

  render() {

    const {
      // time,
      yolo
    } = this.props;

    // const {} = this.state;

    return (
      <VideoBg videoId={yolo ? 'bX1NLuJrPZg' : 'tfbIVD7H2P8'} />
    );
  }
}
