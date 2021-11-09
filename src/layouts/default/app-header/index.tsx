import Image from 'next/image';
import { FunctionComponent } from 'react';
import clsx from 'clsx';
import { Button } from '~components/atoms/button';
import { Container } from '~components/atoms/container';

import styles from './app-header.module.scss';

export interface IAppHeader {
  transparent?: boolean;
  className?: string;
}

export const AppHeader: FunctionComponent<IAppHeader> = ({
  transparent,
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.transparent]: transparent,
  });

  return (
    <header className={classNames}>
      <Container className={styles.inner}>
        <div>
          <Image
            src="/moviedb-logo.svg"
            alt="Carma Movie DB"
            width={100}
            height={60}
          />
        </div>
        <div>nav</div>
        <div>
          <Button size="sm">Login</Button>
        </div>
      </Container>
    </header>
  );
};
