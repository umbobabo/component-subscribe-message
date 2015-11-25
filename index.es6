import React from 'react';

export default class SubscribeMessage extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      counter: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      children: '<span class="subscribe-message__title">SUBSCRIBE NOW</span><span class="subscribe-message__additional-title"> for unlimited access to The Economist</span>',
    };
  }

  render() {
    // let counter = null;
    // if(this.props.counter){
    //   counter = `<div>${this.props.counter}</div>`;
    // }
    return (
      <SubscribeMessage className={`subscribe-message ${this.props.className}`}>
        {this.props.children}
      </SubscribeMessage>
    );
  }
}
