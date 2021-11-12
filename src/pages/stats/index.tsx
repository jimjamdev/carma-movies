import { VictoryChart, VictoryBar, VictoryAxis,VictoryTheme  } from 'victory';
import { DefaultLayout } from '~layouts/default';
import { Container } from '~components/atoms/container';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const StatsPage = () => {
  const renderContent = () => {
    return (
      <Container>
        <div style={{height:'50vh'}}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        </div>
      </Container>
    );
  };

  return <DefaultLayout headerPosition="sticky" content={renderContent()} />;
};

export default StatsPage;
