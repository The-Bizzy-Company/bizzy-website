import * as React from 'react';
import Masthead from './components/Masthead';

interface Props {
  headless?: boolean;
  children: React.ReactNode;
}

export default ({children, headless}: Props) => {
  const masthead = !headless && <Masthead />;
  return (
    <>
      {masthead}
      {children}
    </>
  );
};
