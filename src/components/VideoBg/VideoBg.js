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
    this._onReady = this._onReady.bind(this);
    this._onEnd = this._onEnd.bind(this);
    this._toggleCover = this._toggleCover.bind(this);
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
    // console.log('event.type: ', event.type);
    // console.log('synthEvent: ', synthEvent);
    // event.target.mute();
    // access to player in all event handlers via event.target

    // this.setState({
    //   mute: false
    // });
    const playVid = () => event.target.playVideo();
    setTimeout(playVid, 4000);

  }

  _onEnd(event) {
    console.log('event: ', event);

    event.target.destroy()
    // this.setState({
    //   mute: true
    // });
  }


  _toggleCover(event) {
    const player = this.refs.video.internalPlayer;

    if (this.state.mute) {
      player.unMute();
    } else {
      player.mute();
    }
    this.setState({
      mute: !this.state.mute,
    });
  }

  render() {

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
       autoplay: 0,
       controls: 0,
       iv_load_policy: 3,
       showinfo: 0,
       enablejsapi: 1,
       fs: 0,
       modestbranding: 0,
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
                   onEnd={this._onEnd}
                   />
        : null
      }
        <div style={{ ...style.videoCover, opacity: mute ? 0.5 : 0, transform: mute ? 'translateY(0)' : 'translateY(-100%)' }} />
        <div onClick={ this._toggleCover } style={ style.control }>
          { mute ? 'unmute' : 'mute'}
        </div>
      </div>
    );
  }
}
