import * as React from 'react';
import * as styles from './Card.scss';

interface Props {
  icon: any;
  title: string[];
  content: string;
}

export default ({icon, title, content}: Props) => (
  <div className={styles.Card}>
    <img
      className={styles.CardIcon}
      src={icon}
      alt={title.join('').toLowerCase()}
    />
    <div className={styles.CardTitle}>
      <span>{title[0]}</span>
      <span>{title[1]}</span>
    </div>
    <p className={styles.CardContent}>{content}</p>
  </div>
);
