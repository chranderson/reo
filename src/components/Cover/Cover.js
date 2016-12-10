import React, { Component, PropTypes } from 'react';
import pizzaImg from './pizza.gif';

export default class Cover extends Component {

  static propTypes = {
    echo: PropTypes.func,
    time: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    time: 'time',
    title: 'ca'
  }

  getColor() {
    const colors = {
      blackOrange: ['#212121', '#F73246', '#9E8B71', '#2E58F5', '#F18C24' ],
      blueGold: ['#171A1F', '#FEEBB3', '#E3CA8A', '#B6906C'],
      orangeBlue: ['#252233 ', '#EE6C1F', '#D0511A', '#A4060E', '#74030A'],
    };

    return colors.blueGold;
  }

  handleEcho = () => {
    this.props.onEcho('hello from cover')
  }

  render() {
    const styles = require('./cover.css');
    const {
      // echo,
      time
    } = this.props;

    return (
      <div className={styles.Cover}>
        <h1>{time}</h1>
        <span>{time}</span>
        <img id="pizzaImg" src={pizzaImg} role="presentation" />
      </div>
    );
  }
}
