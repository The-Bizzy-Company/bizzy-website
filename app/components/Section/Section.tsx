import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Section.scss';
import Container from 'Components/Container';

interface Props {
  children: React.ReactNode;
  background?: string;
  topWave?: boolean;
  bottomWave?: boolean;
}

export default ({children, background, topWave, bottomWave}: Props) => (
  <div
    className={classNames(
      styles.Section,
      background === 'blue' && styles.SectionBlue,
      topWave && styles.SectionTopWave,
      bottomWave && styles.SectionBottomWave,
    )}
  >
    <Container>{children}</Container>
  </div>
);
