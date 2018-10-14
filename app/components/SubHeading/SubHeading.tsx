import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './SubHeading.scss';

interface Props {
  children: React.ReactNode;
  type?: string;
  center?: boolean;
  inverted?: boolean;
}

export default ({children, type = 'primary', center, inverted}: Props) => (
  <h1
    className={classNames(
      styles.Heading,
      center && styles.HeadingCentered,
      inverted && styles.HeadingInverted,
      type === 'primary' && styles.HeadingPrimary,
      type === 'secondary' && styles.HeadingSecondary,
      type === 'tertiary' && styles.HeadingTertiary,
    )}
  >
    {children}
  </h1>
);
