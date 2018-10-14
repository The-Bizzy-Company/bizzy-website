import * as React from 'react';
import Heading from 'Components/Heading';
import Button from 'Components/Button';
import Stack from 'Components/Stack';
import classNames from 'Utilities/classNames';
import * as close from './icons/close.svg';
import * as styles from './Modal.scss';

interface Action {
  content: string;
  disabled?: boolean;
  onAction(): void;
}

interface Props {
  open: boolean;
  title: string;
  children: React.ReactNode;
  primaryAction?: Action;
  promoImage?: string;
  onClose(): void;
}

function Modal({
  open,
  title,
  onClose,
  children,
  primaryAction,
  promoImage,
}: Props) {
  const className = classNames(
    styles.Modal,
    open && styles.ModalOpen,
    promoImage && open && styles.ModalWide,
  );
  const bodyClassName = classNames(styles.Body, promoImage && styles.BodyPromo);

  const primaryActionMarkup = primaryAction && (
    <Button onClick={primaryAction.onAction} disabled={primaryAction.disabled}>
      {primaryAction.content}
    </Button>
  );

  const contentMarkup = (
    <>
      <div className={styles.CloseButton} onClick={onClose}>
        <Button plain>
          <img src={close} alt="Close" />
        </Button>
      </div>
      <Stack spacing="loose" vertical>
        <Heading type="sub-section">{title}</Heading>
        {children}
        {primaryActionMarkup}
      </Stack>
    </>
  );

  const promoMarkup = (
    <div className={styles.Promo}>
      <img className={styles.PromoImage} src={promoImage} alt="Promo" />
    </div>
  );

  return (
    <div className={className}>
      <div className={bodyClassName}>
        {promoMarkup}
        <div className={styles.Content}>{contentMarkup}</div>
      </div>
    </div>
  );
}

export default Modal;
