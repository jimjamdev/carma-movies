import { FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface IButton {
  id?: string;
  color?: 'mono' | 'secondary' | 'primary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  rounded?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: FunctionComponent<IButton> = ({
  id,
  children,
  color = 'primary',
  size = 'md',
  rounded= true,
  fullWidth,
  className,
  onClick,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.mono]: color === `mono`,
    [styles.primary]: color === `primary`,
    [styles.secondary]: color === `secondary`,
    [styles.xs]: size === `xs`,
    [styles.sm]: size === `sm`,
    [styles.md]: size === `md`,
    [styles.lg]: size === `lg`,
    [styles.xl]: size === `xl`,
    [styles.rounded]: rounded,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button id={id} className={`btn ${classNames}`} onClick={onClick}>
      {children}
    </button>
  );
};
