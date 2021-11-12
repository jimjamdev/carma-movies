import { useEffect } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import { Heading } from '~components/atoms/heading';
import { Spinner } from '~components/atoms/spinner';
import { DefaultLayout } from '~layouts/default';
import { Container } from '~components/atoms/container';
import {
  getTopTen,
  topTenSelector,
  useAppDispatch,
  useAppSelector,
} from '~store';

const testData = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const StatsPage = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(topTenSelector);

  useEffect(() => {
    dispatch(getTopTen({}));
  }, [dispatch]);

  const renderContent = () => {
    if (loading && !data?.results) {
      return <Spinner />;
    }

    const results = data?.results
    console.log('data', data)

    return (
      <Container>
        <div>
          <Heading>Ratings</Heading>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4,3, 4, 5, 6, 7, 8, 9, 10]}
              tickFormat={(x) => x}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => `${x} Stars`}
            />
            <VictoryBar data={results} x="title" y="vote_average" />
          </VictoryChart>
          <Heading>Vote Counts</Heading>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4,3, 4, 5, 6, 7, 8, 9, 10]}
              tickFormat={(x) => x}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => `${x} Stars`}
            />
            <VictoryBar data={results} x="title" y="vote_count" />
          </VictoryChart>
        </div>
      </Container>
    );
  };

  return <DefaultLayout headerPosition="sticky" content={renderContent()} />;
};

export default StatsPage;
