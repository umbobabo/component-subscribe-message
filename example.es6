import SubscribeMessage from './index';
import React from 'react';

export default (
  <div>
    <SubscribeMessage />
    <br/>
    <SubscribeMessage counter="1/3" />
    <br/>
    <SubscribeMessage counter="1/3">
      Overwriting text
    </SubscribeMessage>
  </div>
);
