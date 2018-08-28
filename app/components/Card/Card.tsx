import * as React from 'react';
import * as styles from './Card.scss';

interface Props {
  icon: string;
  title: string[];
  content: string;
}

export default ({icon, title, content}: Props) => (
  <div className={styles.Card}>
    <img src={icon} alt={icon} className={styles.CardIcon} />
    <div className={styles.CardTitle}>
      <span>{title[0]}</span>
      <span>{title[1]}</span>
    </div>
    <p className={styles.CardContent}>{content}</p>
  </div>
);
