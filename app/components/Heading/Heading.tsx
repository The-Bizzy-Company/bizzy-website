import * as React from 'react';
import classNames from 'Utilities/classNames';
import './fonts/noe-display/noe-display.scss';
import * as styles from './Heading.scss';

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
