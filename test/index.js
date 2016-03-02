import SubscribeMessage from '../index.es6';
import React from 'react';
import LinkButton from '@economist/component-link-button';
import BarWrapper from '@economist/component-bar-wrapper';
/* eslint-disable newline-after-var */
describe(`A subscribe message`, () => {
  describe(`it's a React component`, () => {
    it(`it have a link and a target`, () => {
      const subscriptionMessage = SubscribeMessage({ href: 'http://example.com/subscribe' });

      const link = subscriptionMessage.props.children[subscriptionMessage.props.children.length - 1];
      link.props.className.should.contain('subscribe-message__subscribe-link');
      link.props.href.should.equal('http://example.com/subscribe');
      link.props.target.should.equal('_blank');
    });
    it(`provide capabilty to change the render component of the link via the renderSubscribeLink prop`, () => {
      const renderSubscribeLink = props => <span {...props} />
      const subscriptionMessage = SubscribeMessage({ renderSubscribeLink });
      const link = subscriptionMessage.props.children[subscriptionMessage.props.children.length - 1];
      link.type.should.equal(renderSubscribeLink);
    });
    it(`passes any renderCloseButton onto BarWrapper`, () => {
      const renderCloseButton = props => <p {...props}>foobar</p>
      const subscriptionMessage = SubscribeMessage({ renderCloseButton });

      subscriptionMessage.type.should.equal(BarWrapper);
      subscriptionMessage.props.renderCloseButton.should.equal(renderCloseButton);
    });
  });
});
