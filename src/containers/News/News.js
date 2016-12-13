import React, {
  Component,
  // PropTypes
} from 'react';
// import { connect } from 'react-redux';
// import * as aboutActionCreators from '../../redux/reducers/News/about';

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

export default class News extends Component {

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
        News
      </div>
    );
  }
}
