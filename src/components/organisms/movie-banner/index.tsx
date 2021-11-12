import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Heading } from '~components/atoms/heading';
import { Input } from '~components/forms/input';
import { IImageFader, ImageFader } from '~components/molecules/image-fader';
import debounce from '~lib/func/debounce';
import { setSearchQuery, useAppDispatch } from '~store';

import styles from './movie-banner.module.scss';

export const MovieBanner: FunctionComponent<IImageFader> = ({
  data,
  speed,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearch = debounce((e: any) => {
    const value = e?.target?.value;
    dispatch(setSearchQuery(value));
  }, 300);

  const goToSearch = () => {
    return router.push('/search');
  }

  const handleOnClick = (e: Event) => {
    e.preventDefault();
    return goToSearch()
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Heading color="primary" margin="2rem 0">
          Search millions of Movies, TV Shows and People on the go.
        </Heading>
        <Input
          name="search"
          placeholder="Search for a Movie, TV Show or Person...."
          rounded
          size="large"
          icon="search"
          onChange={handleSearch}
          onIconClick={handleOnClick}
          onEnterPress={goToSearch}
        />
      </div>
      <ImageFader className={styles.fader} speed={speed} data={data} />;
    </div>
  );
};
