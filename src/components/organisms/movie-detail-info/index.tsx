import { FunctionComponent } from 'react';
import { Container } from '~components/atoms/container';
import { Heading } from '~components/atoms/heading';
import { Text } from '~components/atoms/text'
import { IMovie } from '~types';
import { IBase } from '~types/base';
import styles from './movie-detail-info.module.scss';

export interface IMovieDetailInfo extends IBase, IMovie {}

export const MovieDetailInfo: FunctionComponent<IMovieDetailInfo> = ({ title, overview }) => {
  return <div className={styles.root}>
    <Container>
        <Heading className={styles.heading} size="lg" color="mono">{title}</Heading>
        <Text as="p">{overview}</Text>
    </Container>
  </div>;
};
