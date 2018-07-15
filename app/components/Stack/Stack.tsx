import * as React from 'react';
import {createUniqueIDFactory} from '@shopify/javascript-utilities/other';
import classNames from 'Utilities/classNames';
import * as styles from './Stack.scss';

interface Props {
  children: React.ReactNode;
  spacing?: 'loose';
  vertical?: boolean;
}

interface ItemProps {
  children: React.ReactNode;
}

const getUniqueID = createUniqueIDFactory('item');

function Item({children}: ItemProps) {
  return <div className={styles.Item}>{children}</div>;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Stack extends React.Component<Props, never> {
  render() {
    const {vertical, children, spacing} = this.props;
    const itemMarkup = React.Children.toArray(children).map(
      (child: React.ReactNode) => <Item key={getUniqueID()}>{child}</Item>,
    );
    const className = classNames(
      styles.Stack,
      vertical && styles.StackVertical,
      spacing === 'loose' && styles.StackSpacedLoose,
    );
    return <div className={className}>{itemMarkup}</div>;
  }
}
