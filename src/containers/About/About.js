import React, {
  Component,
  PropTypes
} from 'react';
// import { connect } from 'react-redux';
// import * as aboutActionCreators from '../../redux/reducers/About/about';

const links = {
  email: 'mailto:sleepybirdemily@gmail.com',
  twitter: 'https://twitter.com/emilyreo',
  facebook: 'https://www.facebook.com/emilyreomusic',
  instagram: 'https://instagram.com/emilyreo',
  soundcloud: 'https://soundcloud.com/emilyreo',
};

import {
  ImgLink,
  Page
} from '../../components';

// import {
  //
// } from '../../containers';


// @connect(
//   state => ({
//     about: state.about.time,
//   }),
// )

export default class About extends Component {

  static propTypes = {
    welcomeMsg: PropTypes.string,
  }
  static defaultProps = {
    welcomeMsg: 'Hello! I am Emily Reo. I am an audio/visual artist and producer stationed in Brooklyn. On tour playing in SAD13. Currently recording a new album.'
  }

  renderLinks() {
    return Object.keys(links).map((key, index) => {
      return (
        <ImgLink key={index}
                 title={key}
                 url={links[key]} />
      );
    })
  }

  render() {

    const {
      welcomeMsg
    } = this.props;

    // const {} = this.state;
    const linkWrap = {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      border: '1px solid white',
      margin: '1em 0',
    }

    const messageStyle = {
      fontSize: 20,
      textTransform: 'uppercase',
    };

    return (
      <Page title="About">
        <span style={messageStyle}>
          { welcomeMsg }
        </span>
        <span style={{...messageStyle, margin: '1em 0'}}>
          Say Hi
        </span>

        <div style={{linkWrap}}>
          {this.renderLinks()}
        </div>
      </Page>
    );
  }
}
