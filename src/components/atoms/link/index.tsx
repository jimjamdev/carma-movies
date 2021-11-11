import clsx from 'clsx';
import { default as NextLink, LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { IBase } from '~types/base';

import styles from './link.module.scss';

export interface ILink extends IBase, LinkProps {}

export const Link: FunctionComponent<ILink> = ({
  children,
  href,
  as,
  passHref= true,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  className,
}) => {
  const router = useRouter();
  const isActiveRoute = router.pathname == href

  const classNames = clsx(className, {
    [styles.root]: true,
    'link-active' : isActiveRoute
  });

  return (
    <span className={`link ${classNames}`}>
      <NextLink
        href={href}
        as={as}
        passHref={passHref}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
      >
        <a className={isActiveRoute ? "link-active" : ""}>{children}</a>
      </NextLink>
    </span>
  );
};
