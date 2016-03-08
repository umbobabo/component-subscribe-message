import 'babel-polyfill';
import LinkButton from '@economist/component-link-button';
import React from 'react';
import SubscribeMessage from './index';
import { createI13nNode } from 'react-i13n'; // eslint-disable-line id-match
import svgForEverybody from 'svg4everybody';
/* eslint-disable  react/display-name */
if (typeof navigator !== 'undefined') {
  svgForEverybody();
}
const TrackedSubscribeLink = createI13nNode(LinkButton, {
  isLeafNode: true,
  bindClickEvent: true,
  follow: true,
});
function renderSubscribeLink(props) {
  return (
    <TrackedSubscribeLink
      i13nModel={{
        action: 'click',
        element: 'Subscribe link',
      }}
      { ...props }
    />
  );
}

export default (
  <div>
    <br style={{ marginTop: 100 }} />
    <SubscribeMessage href="https://subscriptions.economist.com" />
    <br style={{ marginTop: 100 }} />
    <SubscribeMessage counter="1/3" target="_top" renderSubscribeLink={renderSubscribeLink} />
    <br />
  </div>
);
