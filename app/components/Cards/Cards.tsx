import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Cards.scss';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <div className={classNames(styles.Cards)}>{children}</div>
);
