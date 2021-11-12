import { useState, useEffect, useCallback } from 'react';
import { Button } from '~components/atoms/button';
import { Container } from '~components/atoms/container';
import { Grid } from '~components/atoms/grid';
import { Spinner } from '~components/atoms/spinner';
import { MovieItem } from '~components/organisms/movie-item';
import { config } from '~config';
import { DefaultLayout } from '~layouts/default';
import { Input } from '~components/forms/input';
import debounce from '~lib/func/debounce';
import {
  searchSelector,
  useAppDispatch,
  useAppSelector,
  search,
  setSearchQuery,
} from '~store';

const SearchPage = () => {
  const [page, setPage] = useState(1);

  /*
   Dispatch our redux functions or select redux data
   */
  const dispatch = useAppDispatch();
  const { query, data, loading, error } = useAppSelector(searchSelector);
  const { results, total_pages } = data;

  const handleSearch = debounce((e: any) => {
    const value = e?.target?.value;
    dispatch(setSearchQuery(value));
  }, 100);

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

  // Yes, this is rubbish, but I'm outta time and another meeting soon.
  const renderPagination = () => {
    return [...Array(total_pages)].map((item, i) => {
      return (
        <div style={{display: 'inline-flex', backgroundColor: 'black', margin: '0.1rem'}} key={i} onClick={(e) => {
          e.preventDefault();
          setPage(i)
        }}>
          {i}
        </div>
      );
    });
  };

  const renderContent = () => {
    const noResults = !data?.results && !loading;

    return (
      <>
        <Input
          name="search"
          placeholder="Search for a Movie, TV Show or Person...."
          icon="search"
          color="secondary"
          defaultValue={query}
          onChange={handleSearch}
        />
        <Container>
          {loading && <Spinner />}
          {error && error}
          {noResults && 'Search for something placeholder...'}
          <Grid cols={2} tabletCols={3} desktopCols={4} margin="2rem 0">
            {results &&
              results.map((movie) => {
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
          {renderPagination()}
        </Container>
      </>
    );
  };

  useEffect(() => {
    return searchMovies();
  }, [searchMovies]);

  return <DefaultLayout headerPosition="sticky" content={renderContent()} />;
};

export default SearchPage;
