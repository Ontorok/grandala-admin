import PropTypes from 'prop-types';
import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import classes from './Chart.module.css';

const Chart = function (props) {
  const { title, data, dataKey, showGrid } = props;
  return (
    <div className={classes.chart}>
      <h3 className={classes.chartTitle}>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" interval="preserveStartEnd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {showGrid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.prototypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  showGrid: PropTypes.bool
};

Chart.defaultProps = {
  showGrid: false
};

export default Chart;
