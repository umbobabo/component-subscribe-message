import React from 'react';

export default class SubscribeMessage extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.node,
      counter: React.PropTypes.string,
      href: React.PropTypes.string,
      target: React.PropTypes.string,
      counterLabel: React.PropTypes.string,
      renderSubscribeLink: React.PropTypes.func,
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
      target: '_blank',
    };
  }

  render() {
    const className = (this.props.className) ? ` ${this.props.className}` : ``;

    const children = (<div className="subscribe-message__inner-wrapper">
      {(() => {
        if (this.props.counter) {
          return (<div className="subscribe-message__counter">
              <div className="subscribe-message__count">{this.props.counter}</div>
              <div className="subscribe-message__counter-label">{this.props.counterLabel}</div>
            </div>);
        }
      })()}
    {this.props.children}
    </div>);

    const subscribeLinkProps = {
      className: `subscribe-message${className}`,
      href: this.props.href,
      target: this.props.target,
      children,
    };
    const subscribeLink = this.props.renderSubscribeLink ? this.props.renderSubscribeLink(subscribeLinkProps) : (
      <a {...subscribeLinkProps}></a>
    );
    return subscribeLink;
  }
}
