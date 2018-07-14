import * as React from 'react';
import {createUniqueIDFactory} from '@shopify/javascript-utilities/other';
import * as styles from './Stack.scss';

interface Props {
  children: React.ReactNode;
}

const getUniqueID = createUniqueIDFactory('item');

function Item({children}: Props) {
  return <div className={styles.Item}>{children}</div>;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Stack extends React.Component<Props, never> {
  render() {
    const {children} = this.props;
    const itemMarkup = React.Children.toArray(children).map(
      (child: React.ReactNode) => <Item key={getUniqueID()}>{child}</Item>,
    );
    return <div className={styles.Stack}>{itemMarkup}</div>;
  }
}
