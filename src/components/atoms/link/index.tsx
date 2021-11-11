import { default as NextLink, LinkProps } from 'next/link';
import { FunctionComponent } from 'react';

import styles from './link.module.scss';

export interface ILink extends LinkProps {}

export const Link: FunctionComponent<ILink> = ({ children, href }) => {
  return (
    <span className={`link ${styles.root}`}>
      <NextLink href={href}>{children}</NextLink>
    </span>
  );
};
