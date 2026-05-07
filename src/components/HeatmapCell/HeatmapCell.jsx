import PropTypes from 'prop-types';
import './HeatmapCell.css';

const HeatmapCell = ({ state = 'NA', className = '' }) => {
  let stateClass = 'heatmapCellNa';
  let text = '-';

  switch (state) {
    case '+ <50%':
      stateClass = 'heatmapCellPositiveLow';
      text = '+0.12%';
      break;
    case '+ >49%':
      stateClass = 'heatmapCellPositiveHigh';
      text = '+0.12%';
      break;
    case '- <50%':
      stateClass = 'heatmapCellNegativeLow';
      text = '-0.08%';
      break;
    case '- >50%':
      stateClass = 'heatmapCellNegativeHigh';
      text = '-0.08%';
      break;
    default:
      stateClass = 'heatmapCellNa';
      text = '-';
  }

  return (
    <div className={`heatmapCell ${stateClass} ${className}`}>
      <p className="heatmapCellText">{text}</p>
    </div>
  );
};

HeatmapCell.propTypes = {
  state: PropTypes.oneOf(['NA', '+ <50%', '+ >49%', '- <50%', '- >50%']),
  className: PropTypes.string,
};

export default HeatmapCell;