import React from 'react';
import Rechart from '../../components/chart/Rechart';
import data from '../../fake-data/activeUsers';

const Chart = function () {
  return <Rechart title="User Anylytics" data={data} dataKey="Active User" showGrid />;
};

export default Chart;
