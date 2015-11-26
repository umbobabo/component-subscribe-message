import React from 'react';

export default class SubscribeMessage extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.node,
      counter: React.PropTypes.string,
      counterLabel: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      children: (
        <div className="subscribe-message__message">
          <span className="subscribe-message__title">SUBSCRIBE NOW</span>
          <span className="subscribe-message__additional-title">for unlimited access to The Economist</span>
        </div>
      ),
      counterLabel: 'articles read.',
      href: 'https://subscriptions.economist.com',
    };
  }

  render() {
    return (
      <a className={`subscribe-message ${this.props.className}`} href="">
        <div className="subscribe-message__inner-wrapper">
          {(() => {
            if (this.props.counter) {
              return (<div className="subscribe-message__counter">
                  <div className="subscribe-message__count">{this.props.counter}</div>
                  <div className="subscribe-message__counter-label">{this.props.counterLabel}</div>
                </div>);
            }
          })()}
        {this.props.children}
        </div>
      </a>
    );
  }
}
