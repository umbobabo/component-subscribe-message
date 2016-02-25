if (typeof navigator !== 'undefined') require('svg4everybody')()
require('babel-core/polyfill')
import SubscribeMessage from './index';
import React from 'react';
/* eslint-disable id-match */
/* eslint-disable  react/display-name */
import LinkButton from '@economist/component-link-button';
import { createI13nNode } from 'react-i13n';
const I13nSubscribeLink = createI13nNode(LinkButton, {
  isLeafNode: true,
  bindClickEvent: true,
  follow: true,
});
export default (
  <div>
    <br style={{ marginTop: 100 }} />
    <SubscribeMessage href="https://subscriptions.economist.com"/>
    <br style={{ marginTop: 100 }} />
    <SubscribeMessage counter="1/3" target="_top"
      renderSubscribeLink={(props) => <I13nSubscribeLink i13nModel={{
        action: 'click',
        element: 'Subscribe link',
      }}
        {...props}
                                      />}
    />
    <br/>
  </div>
);
