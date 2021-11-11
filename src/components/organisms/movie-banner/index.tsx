import { FunctionComponent } from 'react';
import { Heading } from '~components/atoms/heading';
import { IImageFader, ImageFader } from '~components/molecules/image-fader';

import styles from './movie-banner.module.scss';

export const MovieBanner: FunctionComponent<IImageFader> = ({
  data,
  speed,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Heading color="primary">Search millions of Movies, TV Shows and People on the go.</Heading>
      </div>
      <ImageFader className={styles.fader} speed={speed} data={data} />;
    </div>
  );
};
