import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import style from './videoBgStyle';

export default class VideoBg extends Component {

  static propTypes = {
    videoId: PropTypes.string,
  }

  static defaultProps = {
    videoId: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      size: {
        height: null,
        width: null
      },
      mute: false,
    };
    // this.function = this.function.bind(this);
  }

  componentDidMount() {
    const compDOM = ReactDOM.findDOMNode(this.refs.videoBg);

    // const compW = compDOM.clientWidth;
    // const compH = compDOM.clientHeight;
    // console.log('refs: ', this.refs.videoBg);
    this.setState({
      size: {
        height: compDOM.clientHeight,
        width: compDOM.clientWidth
      },
    });
  }

  _onReady(event) {
    console.log('event.target: ', event.target);
    // event.target.mute();
    // access to player in all event handlers via event.target
  }


  _toggleCover = () => {
    // console.log('toggleCover: ', event.target);
    // event.target.mute();
    this.setState({
      mute: !this.state.mute,
    });
  }

  render() {
  // const styles = require('VideoBG.scss');

    const {
      videoId
    } = this.props;

    const {
      mute,
      size,
    } = this.state;

    const opts = {
     height: size.height,
     width: size.width,
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
       controls: 0,
       iv_load_policy: 3,
       showinfo: 0,
     }
   };


   const haveSizes = Object.values(this.state).every(val => val !== null);

    return (
      <div ref="videoBg" style={ style.videoBg }>

      {
        haveSizes && videoId
        ? <YouTube ref="video"
                   videoId={videoId}
                   opts={opts}
                   onReady={this._onReady}
                   />
        : null
      }
        <div style={{ ...style.videoCover, opacity: mute ? 0.8 : 0 }} />
        <div onClick={ this._toggleCover } style={ style.control }>
          { mute ? 'unmute' : 'mute'}
        </div>
      </div>
    );
  }
}
