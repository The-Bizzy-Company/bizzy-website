import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Button.scss';

interface Props {
  url?: string;
  outlined?: boolean;
  plain?: boolean;
  size?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?(): void;
}

export default ({
  url,
  children,
  outlined,
  size,
  plain,
  onClick,
  disabled,
}: Props) => {
  if (plain) {
    return <button className={styles.ButtonPlain}>{children}</button>;
  }

  const className = classNames(
    styles.Button,
    outlined && styles.ButtonOutlined,
    size === 'small' && styles.ButtonSizeSmall,
    size === 'medium' && styles.ButtonSizeMedium,
    size === 'large' && styles.ButtonSizeLarge,
  );
  if (url) {
    return (
      <a className={className} href={url}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};
