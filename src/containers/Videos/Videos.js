import React, {
  Component,
  // PropTypes
} from 'react';
// import { connect } from 'react-redux';
// import * as aboutActionCreators from '../../redux/reducers/Videos/about';

// import {
//   VideoBg
// } from '../../components';

// import {
  //
// } from '../../containers';


// @connect(
//   state => ({
//     about: state.about.time,
//   }),
// )

export default class Videos extends Component {

  // static propTypes = {
  //   time: PropTypes.string,
  // }
  // static defaultProps = {}

  render() {

    // const {
      // time
    // } = this.props;

    // const {} = this.state;
    const style = {
      border: '1px solid yellow',
      padding: '2em'
    };

    return (
      <div style={style}>
        Videos
      </div>
    );
  }
}