import React, { Component, PropTypes } from 'react';

import './articlePreview.scss';

import {
  TimelineMax,
} from 'gsap';

export default class ArticlePreview extends Component {

  static propTypes = {
    action: PropTypes.func,
    article: PropTypes.object,
    author: PropTypes.object,
    readTime: PropTypes.string,
    subTitle: PropTypes.string,
  }

  static defaultProps = {
    author: {
      id: "5303d74c64f66366f00cb9b2a94f3251bf5",
      username: "@chr_s_nd_rs_n",
      name: "Chris Anderson",
      url: "https://chranderson.github.io/portfolio",
      imageUrl: "https://avatars2.githubusercontent.com/u/2660355?v=3&u=f866c21d519dcc65b0e5f5833fd12aaba9d57a6a&s=400"
    },
    article: {
      id: "001aaa",
      authorId: "5303d74c64f66366f00cb9b2a94f3251bf5",
      title: "See My Setup",
      subTitle: 'Overwhelmed by all of the options?! You are not alone.',
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
    readTime: '10min',
  }

  // componentDidMount() {}

  onMouseOver = () => this.animate('in');
  onMouseOut  = () => this.animate('out');

  animate(dir) {
    const preview = this.refs.articlePreview;
    const timeMax = new TimelineMax({repeat: 0});
    const yNum = dir === 'out'
               ? '0'
               : '-1';
    const opNum = dir === 'out'
               ? 0.9
               : 1;

    timeMax.to(preview, .25, {y:yNum, opacity:opNum});
  }

  handleClick = () => {
    this.props.action(this.props.article.id);
  }

  render() {

    const {
      id,
      title,
      url,
      // canonicalUrl,
      publishedAt,
      subTitle,

    } = this.props.article;

    const {
      author,
      readTime,
    } = this.props;

    const publishDate = new Date(publishedAt).toLocaleDateString();

    return (
      <div id={id}
           onClick={this.handleClick}
           onMouseOver={this.onMouseOver}
           onMouseOut={this.onMouseOut}
           ref="articlePreview"
           className="ArticlePreview">

        <div className="metaData">
          <a href={author.url} target="_blank" title={`more from ${author.name}`}>{author.name}</a>
          <span>{publishDate}</span>
          <span>{readTime}</span>
        </div>

        <section className="articleContent">
          <h3>
            <a href={url} target="_blank">{title}</a>
          </h3>
          <h4>{subTitle}</h4>
        </section>

        <div className="readMore">
          <a href={url} className="readMoreLink" target="_blank">
            Read more...
          </a>
        </div>

      </div>
    );
  }
}
