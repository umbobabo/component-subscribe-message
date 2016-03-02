import 'babel-polyfill';
import BarWrapper from '@economist/component-bar-wrapper';
import React from 'react';
import SubscribeMessage from '../src';
import chai from 'chai';
chai.should();
/* eslint-disable newline-after-var */
describe('A subscribe message', () => {
  describe('it\'s a React component', () => {
    it('it have a link and a target', () => {
      const subscriptionMessage = SubscribeMessage({ href: 'http://example.com/subscribe' });

      const link = subscriptionMessage.props.children[subscriptionMessage.props.children.length - 1];
      link.props.className.should.contain('subscribe-message__subscribe-link');
      link.props.href.should.equal('http://example.com/subscribe');
      link.props.target.should.equal('_blank');
    });
    it('provide capabilty to change the render component of the link via the renderSubscribeLink prop', () => {
      function renderSubscribeLink(props) {
        return (<span {...props} />);
      }
      const subscriptionMessage = SubscribeMessage({ renderSubscribeLink });
      const link = subscriptionMessage.props.children[subscriptionMessage.props.children.length - 1];
      link.type.should.equal(renderSubscribeLink);
    });
    it('passes any renderCloseButton onto BarWrapper', () => {
      function renderCloseButton(props) {
        return (<p {...props}>foobar</p>);
      }
      const subscriptionMessage = SubscribeMessage({ renderCloseButton });

      subscriptionMessage.type.should.equal(BarWrapper);
      subscriptionMessage.props.renderCloseButton.should.equal(renderCloseButton);
    });
  });
});
