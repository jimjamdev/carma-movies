import { FunctionComponent } from 'react';
import { AppHeader } from './app-header';
import { Container } from '~components/atoms/container';

export const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <main>
      <AppHeader />
      <Container>{children}</Container>
    </main>
  );
};
