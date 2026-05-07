import AreaChart from './AreaChart.jsx';

export default {
  title: 'Components/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
    variant: {
      control: { type: 'select' },
      options: ['Profit', 'Loss'],
    },
  },
};

export const Default = {
  args: {
    type: 1,
    variant: 'Profit',
  },
};

export const Profit = {
  args: {
    type: 1,
    variant: 'Profit',
  },
};

export const Loss = {
  args: {
    type: 1,
    variant: 'Loss',
  },
};

export const AllTypes = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    {[1, 2, 3, 4, 5].map(type => (
      <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <AreaChart type={type} variant="Profit" />
        <AreaChart type={type} variant="Loss" />
      </div>
    ))}
  </div>
);