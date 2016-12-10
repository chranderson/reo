import React, { Component, PropTypes } from 'react';

import './tab.scss';

export default class Tab extends Component {

  static propTypes = {
    handleClick: PropTypes.func,
    link: PropTypes.string,
    selected: PropTypes.bool,
    tabName: PropTypes.string
  }

  static defaultProps = {
    selected: false,
    tabName: 'tab'
  }

  handleClick = () => {
    this.props.handleClick(this.props.tabName);
  }

  render() {

    const {
      link,
      selected,
      tabName
    } = this.props;

    let tabStyle = 'Tab';
    tabStyle += selected
              ? ' active'
              : '';
    return (
      <div className={tabStyle}
           onClick={ !link ? this.handleClick : null }>
        {
          link
          ? <a href={link} target="_blank" title="view code">{tabName}</a>
          : tabName
        }

      </div>
    );
  }
}
