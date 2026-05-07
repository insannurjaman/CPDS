import HeatmapCell from './HeatmapCell.jsx';

export default {
  title: 'Components/HeatmapCell',
  component: HeatmapCell,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['NA', '+ <50%', '+ >49%', '- <50%', '- >50%'],
    },
  },
};

export const Default = {
  args: {
    state: 'NA',
  },
};

export const PositiveLow = {
  args: {
    state: '+ <50%',
  },
};

export const PositiveHigh = {
  args: {
    state: '+ >49%',
  },
};

export const NegativeLow = {
  args: {
    state: '- <50%',
  },
};

export const NegativeHigh = {
  args: {
    state: '- >50%',
  },
};

export const AllStates = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <HeatmapCell state="NA" />
    <HeatmapCell state="+ <50%" />
    <HeatmapCell state="+ >49%" />
    <HeatmapCell state="- <50%" />
    <HeatmapCell state="- >50%" />
  </div>
);