//Link.react.js

import React from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered'
};

export default class Link extends React.Component {
  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        className={this.state.class}>
        {this.props.children}
      </a>
    );
  }
}
