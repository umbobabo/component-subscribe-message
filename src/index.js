import React from 'react';
import BarWrapper from '@economist/component-bar-wrapper'
import LinkButton from '@economist/component-link-button'

export default function SubscribeMessage({
  renderSubscribeLink,
  renderCloseButton,
  onClose,
  productImage = '/assets/product-image.png',
  href = 'https://subscriptions.economist.com'
}) {
  const SubscribeLinkComponent = renderSubscribeLink || LinkButton;
  return (
    <BarWrapper
      className="subscribe-message"
      classNamePrefix="subscribe-message"
      renderCloseButton={renderCloseButton}
      onClose={onClose}
    >
      <img className="subscribe-message__image" src={productImage} />
      <div className="subscribe-message__secondary-cta">
        Unlock the bigger picture every week with <em>The Economist</em>
      </div>
      <div className="subscribe-message__main-cta">
        Subscribe now and enjoy great savings
      </div>
      <SubscribeLinkComponent className="subscribe-message__subscribe-link" href={href} target="_blank">
        Subscription offers
      </SubscribeLinkComponent>
    </BarWrapper>
  );
}

