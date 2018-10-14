import * as React from 'react';
import classNames from 'Utilities/classNames';
import Container from 'Components/Container';
import * as styles from './Section.scss';

interface Props {
  children: React.ReactNode;
  background?: string;
  topWave?: boolean;
  bottomWave?: boolean;
  centerContent?: boolean;
}

export default ({
  children,
  background,
  topWave,
  bottomWave,
  centerContent,
}: Props) => (
  <div
    className={classNames(
      styles.Section,
      background === 'sea' && styles.SectionSea,
      background === 'purple' && styles.SectionPurple,
      topWave && styles.SectionTopWave,
      bottomWave && styles.SectionBottomWave,
    )}
  >
    <Container center={centerContent}>{children}</Container>
  </div>
);
