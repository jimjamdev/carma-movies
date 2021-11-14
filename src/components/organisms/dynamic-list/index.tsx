import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Grid, IGrid } from '~components/atoms/grid';
import { Spinner } from '~components/atoms/spinner';
import { DefaultListComponent } from '~components/organisms/dynamic-list/default-list-component';

import styles from './dynamic-list.module.scss';

export interface IDynamicList extends IGrid {
  data: Array<any>;
  fetchFunc?: any;
  startPage?: number;
  loading: boolean;
  error?: string;
  listComponent?: any;
  totalResults: number;
  rootMargin?: string;
}

export const DynamicList: FunctionComponent<IDynamicList> = ({
  className,
  data,
  fetchFunc,
  startPage = 1,
  loading,
  error,
  totalResults,
  listComponent,
  rootMargin = '0px 0px 400px 0px',
  cols = 1,
  spacing = 1,
  tabletCols = 4,
  tabletSpacing = 2,
  desktopCols = 4,
  desktopSpacing = 3,
  margin,
}) => {
  const [page, setPage] = useState<number>(startPage);
  const [items, setItems] = useState<Array<any>>([]);

  const classNames = clsx(className, {
    [styles.root]: true,
  });

  const loadNextPage = () => {
    console.log('loadNextPage');
    fetchFunc && fetchFunc(page + 1);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setItems((current) => {
      return [...Array.from(new Set([...current, ...data]))];
    });
  }, [data]);

  const hasNextPage = items?.length < totalResults;

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadNextPage,
    disabled: !!error,
    rootMargin,
  });

  console.log('items', items?.length, 'page', page);

  const ListComponent = listComponent || DefaultListComponent;

  return (
    <Grid
      className={`dyna-list ${classNames}`}
      margin={margin}
      cols={cols}
      spacing={spacing}
      tabletCols={tabletCols}
      tabletSpacing={tabletSpacing}
      desktopCols={desktopCols}
      desktopSpacing={desktopSpacing}
    >
      {items &&
        items.map((item: any, index: number) => {
          return (
            <ListComponent key={index} {...item}>
              {item.title}
            </ListComponent>
          );
        })}
      {(loading || hasNextPage) && (
        <div ref={infiniteRef}>
          <Spinner />
        </div>
      )}
    </Grid>
  );
};
