import clsx from 'clsx';
import { FunctionComponent } from 'react';
import styles from './text.module.scss';

export interface IText {
  as?: 'div' | 'span' | 'p';
  color?: 'mono' | 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontFamily?: 'primary' | 'secondary';
  weight?: 'lighter' | 'light' | 'medium' | 'bold' | 'heavy';
  style?: 'italic'
  transform?: 'uppercase' | 'capitalize' | 'lowercase';
  margin?: string;
  padding?: string;
  lineHeight?: string;
  className?: string;
}

export const Text: FunctionComponent<IText> = ({
  children,
  as = 'span',
  color,
  size ,
  fontFamily,
  weight ,
  style,
  transform,
  margin,
  padding,
  lineHeight,
  className,
}) => {
  const CustomTag = `${as}` as any;
  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.primaryFont]: fontFamily === 'primary',
    [styles.secondaryFont]: fontFamily === 'secondary',
    [styles.primaryColor]: color === 'primary',
    [styles.secondaryColor]: color === 'secondary',
    [styles.monoColor]: color === 'mono',
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.xl]: size === 'xl',
    [styles.lighter]: weight === 'lighter',
    [styles.light]: weight === 'light',
    [styles.medium]: weight === 'medium',
    [styles.bold]: weight === 'bold',
    [styles.heavy]: weight === 'heavy',
    [styles.style]: style === 'italic',
    [styles.uppercase]: transform === 'uppercase',
    [styles.capitalize]: transform === 'capitalize',
    [styles.lowercase]: transform === 'lowercase',
  });
  return (
    <CustomTag
      className={`text ${classNames}`}
      style={{ margin, padding, lineHeight }}
    >
      {children}
    </CustomTag>
  );
};
