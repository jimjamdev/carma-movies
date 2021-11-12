import { FunctionComponent } from 'react';
import { Heading } from '~components/atoms/heading';
import { Input } from '~components/forms/input';
import { IImageFader, ImageFader } from '~components/molecules/image-fader';

import styles from './movie-banner.module.scss';

export const MovieBanner: FunctionComponent<IImageFader> = ({
  data,
  speed,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Heading color="primary" margin="2rem 0">Search millions of Movies, TV Shows and People on the go.</Heading>
        <Input name="search" placeholder="Search for a Movie, TV Show or Person...." rounded size="large" icon="search" />
      </div>
      <ImageFader className={styles.fader} speed={speed} data={data} />;
    </div>
  );
};
