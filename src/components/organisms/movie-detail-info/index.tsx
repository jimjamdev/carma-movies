import { FunctionComponent } from 'react';
import { Container } from '~components/atoms/container';
import { Heading } from '~components/atoms/heading';
import { Text } from '~components/atoms/text';
import { ImageFader } from '~components/molecules/image-fader';
import { Rating } from '~components/molecules/rate';
import { IMovie } from '~types';
import { IBase } from '~types/base';
import styles from './movie-detail-info.module.scss';

export interface IMovieDetailInfo extends IBase, IMovie {
  fadeImages: Array<IMovie>;
}

export const MovieDetailInfo: FunctionComponent<IMovieDetailInfo> = ({
  title,
  overview,
  vote_average,
  fadeImages,
}) => {
  return (
    <>
      <ImageFader
        className={styles.slideContainer}
        data={fadeImages}
        speed={10000}
      />
      <div className={styles.root}>
        <Container>
          <Heading className={styles.heading} size="lg" color="mono">
            {title}
          </Heading>
          <Text as="p">{overview}</Text>
          <div className={styles.ratingContainer}>
            <Rating
              rating={vote_average}
              onChange={(vote: number) => console.log(`I voted  ${vote}`)}
            />
          </div>
        </Container>
      </div>
    </>
  );
};
