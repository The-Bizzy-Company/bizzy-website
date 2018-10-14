import * as React from 'react';
import * as styles from './Container.scss';
import classNames from 'Utilities/classNames';

interface Props {
  children: React.ReactNode;
  center?: boolean;
}

export default ({children, center}: Props) => (
  <div className={classNames(
      styles.Container,
      center && styles.ContainerCenter,
    )}
  >{children}</div>
);

