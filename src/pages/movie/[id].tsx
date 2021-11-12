import { NextPage } from 'next';
import { Heading } from '~components/atoms/heading';
import { ImageFader } from '~components/molecules/image-fader';
import { MovieDetailInfo } from '~components/organisms/movie-detail-info';
import { DefaultLayout } from '~layouts/default';
import { getMovie, wrapper } from '~store';
import { IMovie } from '~types';

export interface IMoviePage {
  id: string | number;
  movie: IMovie;
}

const MovieDetailPage: NextPage<IMoviePage> = ({ movie }) => {
  return <DefaultLayout content={<MovieDetailInfo {...movie} fadeImages={[movie]} />} />;
};


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({params}) => {
    const id = params?.id
    const movie = await store.dispatch(
      getMovie(id),
    );

    return {
      props: {
        id,
        movie: movie?.payload
      }
    }
  },
);

export default MovieDetailPage;
