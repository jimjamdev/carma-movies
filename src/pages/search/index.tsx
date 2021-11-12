import { useState,  useEffect, useCallback } from 'react';
import { Container } from '~components/atoms/container';
import { Grid } from '~components/atoms/grid';
import { MovieItem } from '~components/organisms/movie-item';
import { config } from '~config';
import { DefaultLayout } from '~layouts/default';
import { Input } from '~components/forms/input';
import debounce from '~lib/func/debounce';
import { searchSelector, useAppDispatch, useAppSelector, search, setSearchQuery } from '~store';

const SearchPage = () => {
  // const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  /*
   Dispatch our redux functions or select redux data
   */
  const dispatch = useAppDispatch();
  const { query, data, loading, error } = useAppSelector(searchSelector);
  console.log('query', query)

  const handleSearch = debounce((e: any) => {
    const value = e?.target?.value
    setSearchQuery(value)
  }, 300)

  const searchMovies = useCallback(() => {
    const fetchUrl = async () => {
      if (query) {
        await dispatch(
          search({
            params: {
              query,
              page,
            },
          }),
        );
      }
    };
    fetchUrl();
  }, [query, dispatch, page]);

  useEffect(() => {
    return searchMovies();
  }, [searchMovies]);

  const renderContent = () => {
    return (
      <>
        <Input
          name="search"
          placeholder="Search for a Movie, TV Show or Person...."
          icon="search"
          color="secondary"
          onChange={handleSearch}
        />
        <Container>
          {loading && <div style={{color: 'red', fontWeight: 'bold'}}>loading...</div>}
          {error && error}
          <Grid cols={2} tabletCols={3} desktopCols={4} margin="2rem 0">
            {data?.results &&
            data.results.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  title={movie?.title}
                  rating={movie?.vote_count}
                  date={movie?.release_date}
                  href={`/movie/${movie.id}`}
                  imageUrl={`${config.imagePath}/w500${movie.poster_path}`}
                />
              );
            })}
          </Grid>
        </Container>
      </>
    );
  };

  return <DefaultLayout headerPosition="sticky" content={renderContent()} />;
};

export default SearchPage;
