import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './default.module.scss';

import { AppHeader } from './app-header';
import { Container } from '~components/atoms/container';

export interface IDefaultLayout {
  banner: ReactNode;
  className?: string;
}

export const DefaultLayout: FunctionComponent<IDefaultLayout> = ({
  children,
  banner,
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <main className={classNames}>
      <AppHeader transparent={true} />
      {banner}
      <Container>{children}</Container>
    </main>
  );
};
