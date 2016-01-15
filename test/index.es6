import SubscribeMessage from '../index.es6';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import LinkButton from '@economist/component-link-button';
/* eslint-disable newline-after-var */
describe(`A subscribe message`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      SubscribeMessage.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<SubscribeMessage/>).should.equal(true);
    });
    it(`it can have a counter with a label`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage, { counter: '1/3' }));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const counter = componentChildren[0];
      const count = counter.props.children[0];
      const label = counter.props.children[1];

      componentChildren.length.should.equal(2);
      counter.props.className.should.equal('subscribe-message__counter');
      count.props.className.should.equal('subscribe-message__count');
      count.props.children.should.equal('1/3');
      label.props.className.should.equal('subscribe-message__counter-label');
      label.props.children.should.equal('articles read.');
    });
    it(`it could not have a counter`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage, {}));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const message = componentChildren[1];

      message.props.className.should.equal('subscribe-message__message');
    });
    it(`it have a default message`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage, {}));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const message = componentChildren[1];
      const title = message.props.children[0];
      const additionalTitle = message.props.children[1];

      title.props.className.should.equal('subscribe-message__title');
      title.props.children.should.be.equal('SUBSCRIBE NOW');
      additionalTitle.props.className.should.equal('subscribe-message__additional-title');
      additionalTitle.props.children.should.be.equal('for unlimited access to The Economist');
    });
    it(`it have a link and a target`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage, {}));
      const linkProps = shallowRenderer.getRenderOutput().props;

      linkProps.className.indexOf('subscribe-message').should.be.at.least(0);
      linkProps.href.should.be.equal('https://subscriptions.economist.com');
      linkProps.target.should.be.equal('_blank');
    });
    it(`default message can be overwritten`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage,
         { children: (<div className="justaclass">Cool</div>) }));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const message = componentChildren[1];

      message.props.className.should.equal('justaclass');
      message.props.children.should.be.equal('Cool');
    });
    it(`provide capabilty to change the render component of the link via the renderSubscribeLink prop`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      /* eslint-disable react/display-name */
      shallowRenderer.render(React.createElement(SubscribeMessage,
         { children: 'Subscribe here!', renderSubscribeLink: (props) => {
           return (<LinkButton
             icon={{
               icon: 'facebook',
             }}
             {...props}
                   />);
         } }));
      const button = shallowRenderer.getRenderOutput();
      const componentChildren = button.props.children.props.children;
      const message = componentChildren[1];

      button.type.should.equal(LinkButton);
      button.props.icon.should.equal('facebook');
      message.should.be.equal('Subscribe here!');
    });
  });
});
