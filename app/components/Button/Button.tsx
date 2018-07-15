import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Button.scss';

interface Props {
  url?: string;
  outlined?: boolean;
  children: React.ReactNode;
}

export default ({url, children, outlined}: Props) => {
  const className = classNames(
    styles.Button,
    outlined && styles.ButtonOutlined,
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
