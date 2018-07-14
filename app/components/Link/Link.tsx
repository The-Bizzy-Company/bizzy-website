import * as React from 'react';
import * as styles from './Link.scss';

interface Props {
  url: string;
  children: React.ReactNode;
}

export default ({url, children}: Props) => (
  <a className={styles.Link} href={url}>
    {children}
  </a>
);
