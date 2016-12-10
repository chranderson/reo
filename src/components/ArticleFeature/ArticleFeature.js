import React, { Component, PropTypes } from 'react';

import './articleFeature.scss';

import {
  TimelineMax,
} from 'gsap';

export default class ArticleFeature extends Component {

  static propTypes = {
    onEcho: PropTypes.func,
    article: PropTypes.object,
    author: PropTypes.object,
    color: PropTypes.array,
    image: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    author: {
      id: "5303d74c64f66366f00cb9b2a94f3251bf5",
      username: "@chr_s_nd_rs_n",
      name: "Chris Anderson",
      image: `${process.env.PUBLIC_URL}/img/logo.png`,
      url: "https://chranderson.github.io/portfolio",
      imageUrl: "https://avatars2.githubusercontent.com/u/2660355?v=3&u=f866c21d519dcc65b0e5f5833fd12aaba9d57a6a&s=400"
    },
    article: {
      id: "",
      authorId: "",
      title: "",
      subTitle: '',
      contentFormat: "html",
      content: "<h1>Overwhelmed by all of the options?!</h1><p>You are not alone.</p>",
      url: "https://chranderson.github.io/portfolio/blog/posts/see-my-setup-001aaa",
      canonicalUrl: "http://localhost:3015/posts/see-my-setup",
      tags: ["js", "js-fatigue", "setup"],
      publishStatus: "unlisted",
      publishedAt: 1442286338435,
      license: "all-rights-reserved",
      licenseUrl: "https://chranderson.github.io/license"
    },
    color: ['#000000', '#ffffff'],
    type: ''
  }
  //
  constructor(props) {
    super(props);
    this.handleRead = this.handleRead.bind(this);
  }

  componentDidMount() {
    this.animate('in');
  }


  // onMouseOver = () => this.animate('in');
  // onMouseOut  = () => this.animate('out');


  animate(dir) {
    const feature = this.refs.articleFeature;
    const timeMax = new TimelineMax({repeat: 0});
    const yNum = dir === 'out'
               ? '0'
               : '-4';

    timeMax.to(feature, .25, {y:yNum});
  }


  handleRead() {
    // evt.preventDefault();
    console.log('this.props.article.id: ', this.props.article.id);
    this.props.onEcho();
  }

  render() {

    const {
      article,
      author,
      color,
      image,
      // type
    } = this.props;
    // const bgColor = 'blue2';

    const dynamicStyles = {
      background: color[0],
      color: color[1]
    };

    const dateStyle = {
      color: color[2],
    };

    const linkStyle = {
      color: color[2],
    };

    const subTitleStyle = {
      alignSelf: 'flex-start',
      background: color[2],
      color: color[0],
      padding: '5px 10px',
    };
    const publishDate = new Date(article.publishedAt).toLocaleDateString();
    const mediaStyle = {
      background: `url(${image}) center`,
      backgroundSize: 'cover',
    };

    return (
      <div onMouseOver={this.onMouseOver}
           onMouseOut={this.onMouseOut}
           className={`ArticleFeature`}
           style={dynamicStyles}
           onClick={this.handleRead}>

        <div className={`articleInner`}>
          <section className={`title`}>
            <span className={`date`} style={dateStyle}>{publishDate}</span>
            <h1 ref="articleFeature">
              { article.title }
            </h1>
            <subTitle style={subTitleStyle}>
              { article.subTitle }
            </subTitle>

            <div className={'linkRow'} style={linkStyle}>
              <a href={author.url} title={`more by ${author.name}`} target="_blank">{author.name}</a>
              <div id="featureArticleLink" onClick={this.handleRead} title={`read article`}>Read more...</div>
            </div>
          </section>
          <section className={`media`} style={mediaStyle}>
            <img src={image} role="presentation" />
          </section>
        </div>

      </div>
    );
  }
}
