import * as React from 'react';

import './fonts/noe-display/noe-display.scss';
import * as styles from './Heading.scss';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <h1 className={styles.Heading}>{children}</h1>
);
