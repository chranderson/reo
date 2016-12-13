import React, { Component, PropTypes } from 'react';

import styles from './imgLinkStyle.js';

import twitterImg from './img/twitter.gif';
import facebookImg from './img/facebook.gif';
import emailImg from './img/email.gif';
import instagramImg from './img/instagram.gif';
import soundcloudImg from './img/soundcloud.gif';

export default class ImgLink extends Component {

  static propTypes = {
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    id: 'xx',
    url: 'http://',
    title: 'link'
  }

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    // this.function = this.function.bind(this);
  }

  toggleHover = () => {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
  // const styles = require('ImgLink.scss');

    const {
      id,
      url,
      title
    } = this.props;

    const {
      hovered
    } = this.state;

    const dynamicStyle = hovered
                       ? { ...styles.imgLink, ...styles.hover }
                       : styles.imgLink;

    let imgLink;
    if (title === 'email') imgLink = emailImg;
    if (title === 'twitter') imgLink = twitterImg;
    if (title === 'facebook') imgLink = facebookImg;
    if (title === 'instagram') imgLink = instagramImg;
    if (title === 'soundcloud') imgLink = soundcloudImg;

    return (
      <a href={ url }
         onMouseOver={ this.toggleHover }
         onMouseLeave={ this.toggleHover }
         ref={ `${id}ImgLink` }
         style={ dynamicStyle }
         target={ '_blank' }
         title={ title }>
        { title }
        <img role="presentation" src={imgLink} />
      </a>
    );
  }
}
