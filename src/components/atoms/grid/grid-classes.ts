import clsx from 'clsx';
import styles from '~components/atoms/grid/grid.module.scss';

export const gridClasses = (
  className?: string,
  cols?: number,
  tabletCols?: number,
  desktopCols?: number,
  spacing?: number,
  tabletSpacing?: number,
  desktopSpacing?: number,
) => {
  return clsx(className, {
    // Default and mobile
    [styles.root]: true,
    [styles.col21]: cols === 1,
    [styles.cols2]: cols === 2,
    [styles.cols3]: cols === 3,
    [styles.cols4]: cols === 4,
    [styles.cols5]: cols === 5,
    [styles.cols6]: cols === 6,
    [styles.cols7]: cols === 7,
    [styles.cols8]: cols === 8,
    [styles.cols9]: cols === 9,
    [styles.cols10]: cols === 10,
    [styles.cols11]: cols === 11,
    [styles.cols12]: cols === 12,
    // Tablet
    [styles.tabletCols1]: tabletCols === 1,
    [styles.tabletCols2]: tabletCols === 2,
    [styles.tabletCols3]: tabletCols === 3,
    [styles.tabletCols4]: tabletCols === 4,
    [styles.tabletCols5]: tabletCols === 5,
    [styles.tabletCols6]: tabletCols === 6,
    [styles.tabletCols7]: tabletCols === 7,
    [styles.tabletCols8]: tabletCols === 8,
    [styles.tabletCols9]: tabletCols === 9,
    [styles.tabletCols10]: tabletCols === 10,
    [styles.tabletCols11]: tabletCols === 11,
    [styles.tabletCols12]: tabletCols === 12,
    // Desktop
    [styles.desktopCols1]: desktopCols === 1,
    [styles.desktopCols2]: desktopCols === 2,
    [styles.desktopCols3]: desktopCols === 3,
    [styles.desktopCols4]: desktopCols === 4,
    [styles.desktopCols5]: desktopCols === 5,
    [styles.desktopCols6]: desktopCols === 6,
    [styles.desktopCols7]: desktopCols === 7,
    [styles.desktopCols8]: desktopCols === 8,
    [styles.desktopCols9]: desktopCols === 9,
    [styles.desktopCols10]: desktopCols === 10,
    [styles.desktopCols11]: desktopCols === 11,
    [styles.desktopCols12]: desktopCols === 12,
    // Spacing Default
    [styles.spacing1]: spacing === 1,
    [styles.spacing2]: spacing === 2,
    [styles.spacing3]: spacing === 3,
    // Spacing Tablet
    [styles.tabletSpacing1]: tabletSpacing === 1,
    [styles.tabletSpacing2]: tabletSpacing === 2,
    [styles.tabletSpacing3]: tabletSpacing === 3,
    // Spacing Desktop
    [styles.desktopSpacing1]: desktopSpacing === 1,
    [styles.desktopSpacing2]: desktopSpacing === 2,
    [styles.desktopSpacing3]: desktopSpacing === 3,
  });
};
