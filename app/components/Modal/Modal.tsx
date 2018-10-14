import * as React from 'react';
import Heading from 'Components/Heading';
import classNames from 'Utilities/classNames';
import * as styles from './Modal.scss';

interface Props {
  open: boolean;
  title: string;
}

function Modal({open, title}: Props) {
  const className = classNames(styles.Modal, open && styles.Modal);
  return (
    <div className={className}>
      <div className={styles.Body}>
        <Heading>{title}</Heading>
      </div>
    </div>
  );
}

export default Modal;
