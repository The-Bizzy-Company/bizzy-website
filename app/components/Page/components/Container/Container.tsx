import * as React from 'react';
import * as styles from './Container.scss';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <div className={styles.Container}>{children}</div>
);
