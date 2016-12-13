import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './tab.scss';

export default class Tab extends Component {

  static propTypes = {
    handleClick: PropTypes.func,
    leftSlash: PropTypes.bool,
    selected: PropTypes.bool,
    tabName: PropTypes.string
  }

  static defaultProps = {
    leftSlash: false,
    selected: false,
    tabName: 'tab'
  }

  handleClick = () => {
    this.props.handleClick(this.props.tabName);
  }

  render() {

    const {
      leftSlash,
      selected,
      tabName
    } = this.props;

    let tabStyle = 'Tab';
    tabStyle += selected
              ? ' active'
              : '';

    const title = tabName.toUpperCase();
    return (
      <div className={tabStyle}>
        {
          leftSlash
          ? <span className={'divider'}>/</span>
          : null
        }

        <Link to={`/${tabName}`} activeClassName="active">{title}</Link>

        <span className={'divider'}>/</span>
      </div>
    );
  }
}
