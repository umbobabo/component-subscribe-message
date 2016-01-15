import SubscribeMessage from './index';
import React from 'react';
/* eslint-disable id-match */
/* eslint-disable  react/display-name */
import { createI13nNode } from 'react-i13n';
const I13nSubscribeLink = createI13nNode('a', {
  isLeafNode: true,
  bindClickEvent: true,
  follow: true,
});
export default (
  <div>
    <SubscribeMessage href="https://subscriptions.economist.com"/>
    <br/>
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
