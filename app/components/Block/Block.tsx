import * as React from 'react';
import * as styles from './Block.scss';
import classNames from 'Utilities/classNames';

interface Props {
  children: React.ReactNode;
  align?: string;
}

export default ({children, align}: Props) => (
  <div
    className={classNames(
      styles.Block,
      align === 'left' && styles.BlockLeft,
      align === 'right' && styles.BlockRight,
    )}
  >
    {children}
  </div>
);
