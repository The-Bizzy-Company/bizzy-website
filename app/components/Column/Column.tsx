import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Column.scss';

interface IProps {
  children: React.ReactNode;
  width?: string;
  gutter?: number;
  align?: string;
}

function calc({width, gutter}: any) {
  const style: any = {};

  if (width) {
    style.flexBasis = width;
  }

  if (gutter) {
    style.marginLeft = `${gutter / 2}px`;
    style.marginRight = `${gutter / 2}px`;
  }

  return style;
}

export default ({children, width = '50%', gutter, align}: IProps) => (
  <div
    className={classNames(
      styles.Column,
      align === 'left' && styles.ColumnLeft,
      align === 'right' && styles.ColumnRight,
    )}
    style={calc({width, gutter})}
  >
    {children}
  </div>
);
