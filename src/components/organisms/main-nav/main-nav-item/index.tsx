import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { Text } from '~components/atoms/text';
import { Link } from '~components/atoms/link';
import { INavItem } from '~components/molecules/nav';
import styles from './main-nav-item.module.scss';

export const MainNavItem: FunctionComponent<INavItem> = ({ text, href, className }) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <div className={classNames}>
      <Text weight="heavy" transform="uppercase" size="sm" fontFamily="primary">
        <Link className={styles.link} href={href} passHref>{text}</Link>
      </Text>
    </div>
  );
};
