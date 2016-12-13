import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  // Link
} from '../../components';

import {
  Landing,
  Menu
} from '../../containers';

// import styles - inline
import style from './appStyle';

// import static example data
// import * as something from '../../static/something';

// import * as infoActionCreators from '../../redux/reducers/Info/info';

@connect(
  state => ({
    time: state.info.time,
  }),
)
export default class App extends Component {

  static propTypes = {
    // something: PropTypes.any,
    time: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      scrollUp: false
    }
    this.handleWheel = this.handleWheel.bind(this);
  }

  // componentDidMount() {}

  handleWheel(event) {
    this.setState({
      scrollUp: event.deltaY < 0,
    });
  }

  render() {

    // const {
      // scrollUp,
    // } = this.state;

    const contentStyle = {
      // border: '1px solid white',
      position: 'relative',
    };

    return (
      <div style={style.app} onWheel={this.handleWheel}>
        <Landing />
        <Menu />
        { /*
          scrollUp
          ? <Link id="viewCode"
                  url={'https://github.com/chranderson/reo'}
                  title={'view code'} />
          : null
        */ }
        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
