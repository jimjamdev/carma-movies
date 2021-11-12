import { FunctionComponent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { INavItem } from '~components/molecules/nav';

import { Button } from '~components/atoms/button';
import { Container } from '~components/atoms/container';
import { MainNav } from '~components/organisms/main-nav';

import styles from './app-header.module.scss';

export interface IAppHeader {
  menuItems: Array<INavItem>
  transparent?: boolean;
  className?: string;
  position?: 'fixed' | 'sticky' | 'static'
}

export const AppHeader: FunctionComponent<IAppHeader> = ({
  transparent,
  className,
  position = 'fixed',
  menuItems
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.transparent]: transparent,
    [styles.positionFixed]: position === 'fixed',
    [styles.positionStatic]: position === 'static',
    [styles.positionSticky]: position === 'sticky',
  });

  return (
    <div className={classNames}>
      <Container className={styles.inner}>
        <div>
          <Image
            src="/moviedb-logo.svg"
            alt="Carma Movie DB"
            width={100}
            height={60}
          />
        </div>
        <MainNav menuItems={menuItems} vertical />
        <div>
          { /* Sometime we want to pass an ID for automated tests */}
          <Button size="sm" id="login-button">Login</Button>
        </div>
      </Container>
    </div>
  );
};
