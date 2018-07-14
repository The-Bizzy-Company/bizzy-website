import * as React from 'react';

import './fonts/brandon-text/brandon-text.scss';
import * as styles from './App.scss';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <div className={styles.Layout}>{children}</div>
);
