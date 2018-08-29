import * as React from 'react';
import * as styles from './Scoreboard.scss';
import Heading from 'Components/Heading';

interface IProps {
  // children: React.ReactNode;
}

const DATA: any = [
  {name: 'Bas Kaal', referred: 4232},
  {name: 'Koen Vendrik', referred: 2234},
  {name: 'Matti van de Weem', referred: 1123},
  {name: 'Robert van Haren', referred: 833},
  {name: 'Joris Albers', referred: 581},
  {name: 'Martijn van der Heiden', referred: 353},
  {name: 'Joris Renkens', referred: 122},
  {name: 'Mieke Weekers', referred: 100},
  {name: 'Petra van Haren', referred: 50},
  {name: 'Joce Rednekies', referred: 12},
  {name: 'Bas Kaal', referred: 4232},
  {name: 'Koen Vendrik', referred: 2234},
  {name: 'Matti van de Weem', referred: 1123},
  {name: 'Robert van Haren', referred: 833},
  {name: 'Joris Albers', referred: 581},
  {name: 'Martijn van der Heiden', referred: 353},
  {name: 'Joris Renkens', referred: 122},
  {name: 'Mieke Weekers', referred: 100},
  {name: 'Petra van Haren', referred: 50},
  {name: 'Joce Rednekies', referred: 12},
];

export default () => (
  <div className={styles.Scoreboard}>
    <div className={styles.ScoreboardHeader}>
      <span className={styles.ScoreboardHeaderButtons}>
        <span className={styles.ScoreboardHeaderButton} />
        <span className={styles.ScoreboardHeaderButton} />
        <span className={styles.ScoreboardHeaderButton} />
      </span>
      <span className={styles.ScoreboardHeaderHamburger}>
        <span className={styles.ScoreboardHeaderHamburgerBar} />
        <span className={styles.ScoreboardHeaderHamburgerBar} />
        <span className={styles.ScoreboardHeaderHamburgerBar} />
      </span>
    </div>
    <div className={styles.ScoreboardHeading}>
      <Heading>Scoreboard</Heading>
    </div>
    <div className={styles.ScoreboardTableHead}>
      <span className={styles.ScoreboardTableHeadCol}>Nr.</span>
      <span className={styles.ScoreboardTableHeadCol}>Name</span>
      <span className={styles.ScoreboardTableHeadCol}>Referred friends</span>
    </div>
    <div className={styles.ScoreboardTable}>
      {DATA.map((obj: any, index: number) => (
        <div key={index} className={styles.ScoreboardTableRow}>
          <span className={styles.ScoreboardTableRowCol}>#{index + 1}</span>
          <span className={styles.ScoreboardTableRowCol}>{obj.name}</span>
          <span className={styles.ScoreboardTableRowCol}>{obj.referred}</span>
        </div>
      ))}
    </div>
  </div>
);
