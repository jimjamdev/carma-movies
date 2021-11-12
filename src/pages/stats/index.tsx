import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
import { DefaultLayout } from '~layouts/default';
import { Container } from '~components/atoms/container';

const data = [
  { name: 'food', uv: -2000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
];

const StatsPage = () => {
  const renderContent = () => {
    return (
      <Container>
        <LineChart
          width={500}
          height={400}
          data={data}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </Container>
    );
  };

  return <DefaultLayout headerPosition="sticky" content={renderContent()} />;
};

export default StatsPage;
