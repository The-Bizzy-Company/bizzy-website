import * as React from 'react';
import classNames from 'Utilities/classNames';
import * as styles from './Section.scss';
import Container from 'Components/Container';

interface Props {
  children: React.ReactNode;
  background?: string;
}

export default ({children, background}: Props) => (
  <div
    className={classNames(
      styles.Section,
      background === 'blue' && styles.SectionBlue,
    )}
  >
    <Container>{children}</Container>
  </div>
);
