import SubscribeMessage from '../index.es6';
import React from 'react';

describe(`A subscribe message`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      SubscribeMessage.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<SubscribeMessage/>).should.equal(true);
    });
    describe(`It can have a bottom bar`, () => {
      it(`the bottom bar is not present if links are not provided`, () => {
        // const shallowRenderer = TestUtils.createRenderer();
        // shallowRenderer.render(React.createElement(SubscribeMessage, { className: 'SubscribeMessage' }));
        // const componentChildren = shallowRenderer.getRenderOutput().props.children;
        // componentChildren.length.should.equal(1);
        // const primarySubscribeMessage = componentChildren[0];
        // primarySubscribeMessage.props.className.should.equal('SubscribeMessage__primary');
        // primarySubscribeMessage.props.children.should.be.a('Object');
      });
      it(`the bottom bar presents a list of links if provided`, () => {
        // const shallowRenderer = TestUtils.createRenderer();
        // shallowRenderer.render(React.createElement(SubscribeMessage, { className: 'SubscribeMessage', links: registered }));
        // const componentChildren = shallowRenderer.getRenderOutput().props.children;
        // componentChildren.should.be.a('Array');
        // componentChildren.length.should.equal(2);
        // const secondarySubscribeMessage = componentChildren[1];
        // secondarySubscribeMessage.props.className.should.equal('SubscribeMessage__secondary');
        // // Testing the presence of the 3 links on the secondary SubscribeMessage
        // secondarySubscribeMessage.props.children[0].props.children.props.children.length.should.equal(3);
      });
    });
  });
});
