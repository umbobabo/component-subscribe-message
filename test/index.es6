import SubscribeMessage from '../index.es6';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

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
      componentChildren.length.should.equal(2);
      const counter = componentChildren[0];
      counter.props.className.should.equal('subscribe-message__counter');
      const count = counter.props.children[0];
      count.props.className.should.equal('subscribe-message__count');
      count.props.children.should.equal('1/3');
      const label = counter.props.children[1];
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
    it(`it have a deafult message`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage, {}));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const message = componentChildren[1];
      const title = message.props.children[0];
      title.props.className.should.equal('subscribe-message__title');
      title.props.children.should.be.equal('SUBSCRIBE NOW');
      const additionalTitle = message.props.children[1];
      additionalTitle.props.className.should.equal('subscribe-message__additional-title');
      additionalTitle.props.children.should.be.equal('for unlimited access to The Economist');
    });
    it(`deafult message can be overwritten`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(SubscribeMessage,
         { children: (<div className="justaclass">Cool</div>) }));
      const componentChildren = shallowRenderer.getRenderOutput().props.children.props.children;
      const message = componentChildren[1];
      message.props.className.should.equal('justaclass');
      message.props.children.should.be.equal('Cool');
    });
  });
});
