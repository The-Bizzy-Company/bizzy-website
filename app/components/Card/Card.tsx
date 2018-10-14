import * as React from 'react';
import * as styles from './Card.scss';

export interface Card {
  icon: string;
  title: [string, string];
  content: string;
}

export default ({icon, title, content}: Card) => (
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
