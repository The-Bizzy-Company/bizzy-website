import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Container.scss';

interface Props {
  children: React.ReactNode;
  center?: boolean;
}

export default ({children, center}: Props) => (
  <div
    className={classNames(styles.Container, center && styles.ContainerCenter)}
  >
    {children}
  </div>
);
