import * as React from 'react';
import Masthead from './components/Masthead';

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <>
    <Masthead />
    {children}
  </>
);
