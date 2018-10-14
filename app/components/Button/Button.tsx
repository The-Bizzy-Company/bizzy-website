import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Button.scss';

interface Props {
  url?: string;
  outlined?: boolean;
  size?: string;
  children: React.ReactNode;
}

export default ({url, children, outlined, size}: Props) => {
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
  return <button className={className}>{children}</button>;
};
