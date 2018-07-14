import * as React from 'react';
import Masthead from './components/Masthead';
import Container from './components/Container';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <>
    <Masthead />
    <Container>{children}</Container>
  </>
);
