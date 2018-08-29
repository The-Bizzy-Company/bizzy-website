import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Row.scss';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <div className={classNames(styles.Row)}>{children}</div>
);
